

export default async function Events() {
  const res = await fetch('http://tivaco.borodadigital.com/wp-json/wp/v2/pages/32', { cache: 'no-store' });
  const page = await res.json();

  return (
    <div >
      <main >
        <div className="title">{page.acf?.hm_title}</div>
        <div className="description">{page.acf?.hm_description}</div>
      </main>
      <footer></footer>
    </div>
  );
}
