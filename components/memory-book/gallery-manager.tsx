"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  FolderHeart,
  ImagePlus,
  LoaderCircle,
  PencilLine,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { CategorizedGallery } from "./categorized-gallery";
import {
  listStoredGalleryPhotos,
  readFileAsDataUrl,
  removeStoredGalleryPhoto,
  saveStoredGalleryPhoto,
  sortStoredGalleryPhotos,
  type StoredGalleryPhoto,
} from "./gallery-storage";
import type { GalleryCategory } from "./types";

type GalleryManagerProps = {
  categories: GalleryCategory[];
};

type ComposerState = {
  categoryFolder: string;
  caption: string;
  hint: string;
  alt: string;
};

type StatusState = {
  tone: "success" | "error";
  text: string;
} | null;

function createEmptyComposerState(categoryFolder: string): ComposerState {
  return {
    categoryFolder,
    caption: "",
    hint: "",
    alt: "",
  };
}

export function GalleryManager({ categories }: GalleryManagerProps) {
  const defaultCategoryFolder = categories[0]?.folder ?? "";
  const formSectionRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [storedPhotos, setStoredPhotos] = useState<StoredGalleryPhoto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedPhotoId, setSelectedPhotoId] = useState<string | null>(null);
  const [status, setStatus] = useState<StatusState>(null);
  const [composerState, setComposerState] = useState<ComposerState>(() =>
    createEmptyComposerState(defaultCategoryFolder),
  );

  const selectedPhoto =
    storedPhotos.find((photo) => photo.id === selectedPhotoId) ?? null;

  const categoryFrameMap = useMemo(
    () =>
      new Map(
        categories.map((category) => [
          category.folder,
          category.photos[0]?.frameClassName ?? "aspect-[4/5]",
        ]),
      ),
    [categories],
  );

  useEffect(() => {
    let isMounted = true;

    async function loadStoredPhotos() {
      try {
        const photos = await listStoredGalleryPhotos();

        if (!isMounted) {
          return;
        }

        setStoredPhotos(photos);
      } catch (error) {
        if (!isMounted) {
          return;
        }

        const message =
          error instanceof Error
            ? error.message
            : "The gallery archive could not be loaded.";

        setStatus({
          tone: "error",
          text: message,
        });
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadStoredPhotos();

    return () => {
      isMounted = false;
    };
  }, []);

  const categoriesWithUploads = useMemo(
    () =>
      categories.map((category) => {
        const uploadedPhotos = storedPhotos
          .filter((photo) => photo.categoryFolder === category.folder)
          .map((photo) => ({
            ...photo,
            frameClassName:
              photo.frameClassName ?? categoryFrameMap.get(category.folder),
          }));

        return {
          ...category,
          photos: uploadedPhotos.length > 0 ? uploadedPhotos : category.photos,
        };
      }),
    [categories, categoryFrameMap, storedPhotos],
  );

  const categoryCount = new Set(storedPhotos.map((photo) => photo.categoryFolder)).size;

  const resetComposer = () => {
    setSelectedPhotoId(null);
    setSelectedFile(null);
    setComposerState(createEmptyComposerState(defaultCategoryFolder));

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const beginEditing = (photoId: string) => {
    const photo = storedPhotos.find((entry) => entry.id === photoId);

    if (!photo) {
      return;
    }

    setSelectedPhotoId(photoId);
    setSelectedFile(null);
    setComposerState({
      categoryFolder: photo.categoryFolder,
      caption: photo.caption,
      hint: photo.hint ?? "",
      alt: photo.alt,
    });
    setStatus(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    formSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(null);
    setSelectedFile(event.target.files?.[0] ?? null);
  };

  const handleComposerStateChange =
    (field: keyof ComposerState) =>
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
      setComposerState((currentState) => ({
        ...currentState,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);

    if (!composerState.caption.trim()) {
      setStatus({
        tone: "error",
        text: "Please add a short title so this memory has a name.",
      });
      return;
    }

    if (!composerState.hint.trim()) {
      setStatus({
        tone: "error",
        text: "Please add a short description for this photo.",
      });
      return;
    }

    if (!selectedPhoto && !selectedFile) {
      setStatus({
        tone: "error",
        text: "Please choose an image before saving your memory.",
      });
      return;
    }

    setIsSaving(true);

    try {
      const now = new Date().toISOString();
      const src = selectedFile
        ? await readFileAsDataUrl(selectedFile)
        : selectedPhoto?.src ?? "";

      const nextPhoto: StoredGalleryPhoto = {
        id: selectedPhoto?.id ?? crypto.randomUUID(),
        src,
        alt:
          composerState.alt.trim() ||
          `${composerState.caption.trim()} from Bondeth and Salyna's memory archive`,
        caption: composerState.caption.trim(),
        hint: composerState.hint.trim(),
        source: "upload",
        categoryFolder: composerState.categoryFolder,
        fileName:
          selectedFile?.name ?? selectedPhoto?.fileName ?? "bondeth-salyna-memory",
        frameClassName:
          categoryFrameMap.get(composerState.categoryFolder) ??
          selectedPhoto?.frameClassName ??
          "aspect-[4/5]",
        createdAt: selectedPhoto?.createdAt ?? now,
        updatedAt: now,
      };

      await saveStoredGalleryPhoto(nextPhoto);

      setStoredPhotos((currentPhotos) =>
        sortStoredGalleryPhotos([
          nextPhoto,
          ...currentPhotos.filter((photo) => photo.id !== nextPhoto.id),
        ]),
      );

      setStatus({
        tone: "success",
        text: selectedPhoto
          ? "This memory has been updated in your archive."
          : "Your photo has been added to the archive.",
      });
      resetComposer();
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "This photo could not be saved right now.";

      setStatus({
        tone: "error",
        text: message,
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (photoId: string) => {
    const photo = storedPhotos.find((entry) => entry.id === photoId);

    if (!photo) {
      return;
    }

    const shouldDelete = window.confirm(
      `Remove "${photo.caption}" from the archive?`,
    );

    if (!shouldDelete) {
      return;
    }

    try {
      await removeStoredGalleryPhoto(photoId);
      setStoredPhotos((currentPhotos) =>
        currentPhotos.filter((entry) => entry.id !== photoId),
      );

      if (selectedPhotoId === photoId) {
        resetComposer();
      }

      setStatus({
        tone: "success",
        text: "That photo has been removed from the archive.",
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "This photo could not be removed right now.";

      setStatus({
        tone: "error",
        text: message,
      });
    }
  };

  return (
    <div className="grid gap-8">
      <section className="grid gap-6 rounded-[2rem] border border-white/72 bg-white/58 p-5 shadow-[0_20px_52px_rgba(190,24,93,0.08)] backdrop-blur-md xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] xl:p-6">
        <div className="grid gap-5">
          <div className="space-y-3">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-rose-500">
              Archive Studio
            </p>
            <h3 className="font-heading text-3xl leading-tight text-rose-950 sm:text-4xl">
              Upload and organize the real photos of your story
            </h3>
            <p className="max-w-2xl text-sm leading-7 text-rose-950/74 sm:text-base">
              Add your favorite memories category by category, write a small
              description for each one, and your gallery will update right away.
              Each section keeps its placeholders until you upload the real
              moments you want to keep.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-[1.5rem] bg-white/76 p-4 shadow-[0_16px_34px_rgba(190,24,93,0.06)]">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-rose-500">
                Saved Photos
              </p>
              <p className="mt-2 font-heading text-4xl text-rose-950">
                {isLoading ? "..." : storedPhotos.length}
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-white/76 p-4 shadow-[0_16px_34px_rgba(190,24,93,0.06)]">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-rose-500">
                Filled Chapters
              </p>
              <p className="mt-2 font-heading text-4xl text-rose-950">
                {isLoading ? "..." : categoryCount}
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-white/76 p-4 shadow-[0_16px_34px_rgba(190,24,93,0.06)]">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-rose-500">
                Saved On
              </p>
              <p className="mt-2 text-sm leading-6 text-rose-950/74">
                This browser on this device, so you can build the archive while
                you keep shaping the book.
              </p>
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-rose-200/70 bg-rose-50/80 p-4 shadow-[0_16px_30px_rgba(190,24,93,0.05)]">
            <div className="flex items-start gap-3">
              <div className="rounded-2xl bg-rose-950 p-3 text-rose-50 shadow-[0_12px_30px_rgba(136,19,55,0.2)]">
                <Sparkles className="size-5" />
              </div>
              <div className="space-y-2">
                <p className="font-heading text-2xl text-rose-950">
                  A real place for your memories
                </p>
                <p className="text-sm leading-7 text-rose-950/74">
                  This is now an actual gallery workspace instead of a note about
                  placeholders. Upload your images, edit their text later, and
                  remove them whenever you want to reorganize the archive.
                </p>
              </div>
            </div>
          </div>

          {status ? (
            <div
              className={`rounded-[1.5rem] border px-4 py-3 text-sm leading-7 ${
                status.tone === "success"
                  ? "border-emerald-200 bg-emerald-50/88 text-emerald-900"
                  : "border-rose-200 bg-rose-50/88 text-rose-900"
              }`}
            >
              {status.text}
            </div>
          ) : null}
        </div>

        <div
          ref={formSectionRef}
          className="rounded-[1.8rem] border border-white/78 bg-white/78 p-5 shadow-[0_20px_48px_rgba(190,24,93,0.08)]"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-rose-500">
                {selectedPhoto ? "Edit Memory" : "Add Memory"}
              </p>
              <h4 className="mt-2 font-heading text-3xl text-rose-950">
                {selectedPhoto ? "Update this photo" : "Upload a new photo"}
              </h4>
            </div>

            {selectedPhoto ? (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="rounded-full border border-rose-200 bg-rose-50 px-4 text-rose-700 hover:bg-rose-100"
                onClick={resetComposer}
              >
                Create New
              </Button>
            ) : null}
          </div>

          <form className="mt-5 grid gap-4" onSubmit={handleSubmit}>
            <label className="grid gap-2 text-sm text-rose-950/84">
              <span className="font-semibold uppercase tracking-[0.16em] text-rose-500">
                Category
              </span>
              <select
                value={composerState.categoryFolder}
                onChange={handleComposerStateChange("categoryFolder")}
                className="rounded-[1.2rem] border border-rose-200/75 bg-rose-50/68 px-4 py-3 text-base text-rose-950 outline-none transition focus:border-rose-400"
              >
                {categories.map((category) => (
                  <option key={category.folder} value={category.folder}>
                    {category.title}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm text-rose-950/84">
              <span className="font-semibold uppercase tracking-[0.16em] text-rose-500">
                Photo Title
              </span>
              <input
                value={composerState.caption}
                onChange={handleComposerStateChange("caption")}
                placeholder="January in Cambodia"
                className="rounded-[1.2rem] border border-rose-200/75 bg-rose-50/68 px-4 py-3 text-base text-rose-950 outline-none transition placeholder:text-rose-400 focus:border-rose-400"
              />
            </label>

            <label className="grid gap-2 text-sm text-rose-950/84">
              <span className="font-semibold uppercase tracking-[0.16em] text-rose-500">
                Description
              </span>
              <textarea
                value={composerState.hint}
                onChange={handleComposerStateChange("hint")}
                rows={4}
                placeholder="What makes this memory special?"
                className="rounded-[1.2rem] border border-rose-200/75 bg-rose-50/68 px-4 py-3 text-base text-rose-950 outline-none transition placeholder:text-rose-400 focus:border-rose-400"
              />
            </label>

            <label className="grid gap-2 text-sm text-rose-950/84">
              <span className="font-semibold uppercase tracking-[0.16em] text-rose-500">
                Alt Text
              </span>
              <input
                value={composerState.alt}
                onChange={handleComposerStateChange("alt")}
                placeholder="A short description for accessibility"
                className="rounded-[1.2rem] border border-rose-200/75 bg-rose-50/68 px-4 py-3 text-base text-rose-950 outline-none transition placeholder:text-rose-400 focus:border-rose-400"
              />
            </label>

            <label className="grid gap-2 text-sm text-rose-950/84">
              <span className="font-semibold uppercase tracking-[0.16em] text-rose-500">
                Image File
              </span>
              <div className="rounded-[1.4rem] border border-dashed border-rose-300/90 bg-rose-50/72 p-4">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-rose-950 file:mr-4 file:rounded-full file:border-0 file:bg-rose-950 file:px-4 file:py-2 file:text-xs file:font-semibold file:uppercase file:tracking-[0.18em] file:text-rose-50 hover:file:bg-rose-900"
                />
                <p className="mt-3 text-sm leading-6 text-rose-950/70">
                  {selectedFile
                    ? `Selected: ${selectedFile.name}`
                    : selectedPhoto
                      ? `Keeping current file: ${selectedPhoto.fileName}`
                      : "Choose a photo to place inside this category."}
                </p>
              </div>
            </label>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button
                type="submit"
                className="h-12 rounded-full bg-rose-950 px-6 text-rose-50 hover:bg-rose-900"
                disabled={isSaving}
              >
                {isSaving ? (
                  <>
                    <LoaderCircle className="size-4 animate-spin" />
                    Saving
                  </>
                ) : selectedPhoto ? (
                  <>
                    <PencilLine className="size-4" />
                    Update Memory
                  </>
                ) : (
                  <>
                    <ImagePlus className="size-4" />
                    Add To Archive
                  </>
                )}
              </Button>

              <Button
                type="button"
                variant="outline"
                className="h-12 rounded-full border-rose-300/75 bg-white/75 px-6 text-rose-700 hover:bg-rose-50"
                onClick={resetComposer}
                disabled={isSaving}
              >
                <FolderHeart className="size-4" />
                Reset Form
              </Button>
            </div>
          </form>
        </div>
      </section>

      <CategorizedGallery
        categories={categoriesWithUploads}
        onEditPhoto={(photo) => {
          if (photo.id) {
            beginEditing(photo.id);
          }
        }}
        onDeletePhoto={(photo) => {
          if (photo.id) {
            void handleDelete(photo.id);
          }
        }}
      />
    </div>
  );
}
