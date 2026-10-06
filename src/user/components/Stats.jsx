import React from "react";

const stats = [
  {
    value: "1M+",
    label: "Messages Sent",
  },
  {
    value: "99.9%",
    label: "Delivery Rate",
  },
  {
    value: "10K+",
    label: "Happy Businesses",
  },
  {
    value: "24/7",
    label: "Support",
  },
];

function Stats() {
  return (
    <section className="border-t border-gray-100 bg-white">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`
              px-4
              py-6
              text-center
              sm:px-6
              sm:py-7
              lg:py-8
              ${index % 2 !== 0 ? "border-l border-gray-100" : ""}
              ${index >= 2 ? "border-t border-gray-100 md:border-t-0" : ""}
              ${index !== 0 && index % 2 === 0 ? "md:border-l md:border-gray-100" : ""}
            `}
          >
            <h3 className="text-xl font-bold leading-none text-[#0b2859] sm:text-[26px]">
              {stat.value}
            </h3>

            <p className="mt-2 text-xs font-medium text-[#64748b] sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;