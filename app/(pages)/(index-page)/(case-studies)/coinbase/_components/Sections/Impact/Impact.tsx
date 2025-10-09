import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';

export default function Impact() {
  const metrics = [
    {
      value: '36,800+',
      label: 'Affected component instances',
    },
    {
      value: '12.5%',
      label: 'Contribution to CDS Q3 OKR',
    },
    {
      value: '40+',
      label: 'Adopting design teams',
    },
  ];

  return (
    <section className="bg-[#0052FF] w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] relative">
      <div className="px-case-study py-20 text-center">
        <RevealWrapper>
          <h2 className="text-8xl text-white opacity-30 mb-12">My impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {metrics.map((metric, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-6xl font-bold text-white mb-2">
                  {metric.value}
                </span>
                <p className="text-gray-300">{metric.label}</p>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
