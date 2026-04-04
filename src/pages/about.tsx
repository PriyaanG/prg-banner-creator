import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>About</h1>
        </div>
      </section>
      <section className="size-dvh ml-auto mr-auto h-full">
          <div className="inline-block justify-center align-items-center ml-auto mr-auto">
            <img className={"rounded-3xl w-3xs h-auto mb-4 justify-center ml-auto mr-auto"} src={"https://ptfsrp.com/assets/staff/priyaan.webp"}></img>
            <h2 className="text-center justify-center">The Beginning</h2>
            <p>In the beginning of March, Senior Host & Media Management member, Priyaanplayz found a problem with banners: the amount of time it takes to make one. From going into the roblox game, taking the image, putting it into Canva, editing text, it simply takes too long. For that, Priyaanplayz had a solution: a website that creates banners on the fly. Using his programming skills, he developed this site that we now all love and know today.</p>
          </div>
      </section>

    </DefaultLayout>
  );
}
