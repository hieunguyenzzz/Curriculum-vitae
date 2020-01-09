import React from 'react';

const Certification = ({ data }) => (
  <section className="mb-5">
    <h1 className="section-header mb-5">Certification</h1>
    {data &&
    data.map(item => (
      <div className="my-2" key={item.title}>
        <a href={item.url}><h2 className="item-header text-lg">{item.title}</h2></a>
        <p className="text-sm text-neutral-500 font-light">
          {item.date}
        </p>
      </div>
    ))}
  </section>
);

export default Certification;
