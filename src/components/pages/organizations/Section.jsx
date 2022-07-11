function Section() {
  return (
    <div className="flex flex-col mt-10">
      <h3 className="text-teal-600">KEMENKES</h3>
      <h1 className="md:text-4xl text-3xl font-bold my-3">Do you know, <br />what's the Kemenkes?</h1>
      <div className="my-10">
        <div className="w-max flex-col flex items-center gap-8 mx-auto mt-10">
          <img src="/assets/img/default.jpg" alt="poster" className="h-52 w-52 rounded-full" />
          <h3 className="text-teal-600 font-bold text-2xl">KEMENKES</h3>
        </div>
        <div className="mb-8 first-letter:ml-10 mt-20 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore facere, incidunt voluptatem ipsam, magni inventore qui maxime voluptas nesciunt expedita dolor, minus iure maiores eos facilis placeat pariatur voluptatum numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis accusantium, dolorum deserunt inventore consectetur id repellat nostrum ea est officiis ad vitae ut, et quis assumenda, repudiandae omnis odit.</div>
      </div>
    </div>
  );
}

export default Section;