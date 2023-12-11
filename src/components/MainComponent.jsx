import { headContent } from "../constants";
import { Experience, Project, FooterMain } from "../components";

const MainComponent = () => {
  const mainProfile = headContent.find((item) => item.id === 'secondHead');

  if (!mainProfile) {
    return null;
  }

  return (
    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
      <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
        </div>
        <div>
          <p className="mb-4">
            {mainProfile.content.find((item) => item.id === 'paragraph1')?.content}
          </p>
          <p className="mb-4">
            {mainProfile.content.find((item) => item.id === 'paragraph2')?.content}
          </p>
          <p>
            {mainProfile.content.find((item) => item.id === 'paragraph3')?.content}
          </p>
        </div>
      </section>
      <Experience />
      <Project />
      <FooterMain />
    </main>
  )
}

export default MainComponent