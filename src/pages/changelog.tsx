import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function BlogPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Changelog</h1>
        </div>
      </section>
      <section className="size-dvh ml-auto mr-auto h-fit">
          <div>
            <h2 className="text-center justify-center">Version 1.0</h2>
            <ul className="text-center justify-center list-disc list-inside">
              <li>Created Changelog</li>
              <li>Created Image Library</li>
              <li>Created About</li>
            </ul>
          </div>
      </section>
    </DefaultLayout>
  );
}
