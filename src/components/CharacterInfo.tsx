import Corners from "./decorations/Corners";

import { CostumeInfo, Stats } from '@models/character'

function SingleStat({ name, value }) {
  return (
    <div className="flex">
      <div className="w-1/2 uppercase">{name}</div>
      <div className="w-1/2 font-light">{value}</div>
    </div>
  );
}

function StatsOfLevel({ label, stats }: { label: string, stats: Stats }) {
  return (
    <div className="flex-1">
      <span className="mb-4 text-lg">{label}</span>
      <div className="flex flex-col">
        <SingleStat name="Force" value={stats.force ?? '???'} />
        <SingleStat name="HP" value={stats.hp ?? '???'} />
        <SingleStat name="Attack" value={stats.attack ?? '???'} />
        <SingleStat name="Defense" value={stats.defence ?? '???'} />
        <SingleStat name="Agility" value={stats.agility ?? '???'} />
        <SingleStat name="Crit" value={stats.criticalRate ?? '???' + " %"} />
        <SingleStat name="Cdmg" value={stats.criticalDamage ?? '???' + " %"} />
      </div>
    </div>
  );
}

function CostumeDetails({ costume }: { costume: CostumeInfo }): JSX.Element {
  return (
    <div
      className="flex flex-col md:flex-row gap-8 md:p-6 background-repeat"
      style={{
        backgroundImage: "url('/background.png')",
      }}
    >
      <div className="flex-1 h-auto relative bg-center bg-cover bg-white bg-opacity-25 border-2  flex">
        <img
          className="h-auto my-auto"
          src={costume.illustrationURL}
          alt={`${costume.character} (${costume.name.en}) illustration`} />

        <span className="flex absolute top-2 left-2">
          {Array.from({ length: costume.stars }).map((_, index) => (
            <img
              key={index}
              style={{
                marginRight: "-8px",
              }}
              className="w-8 h-8"
              src="/ui/actor/ma001001_01_actor_icon.png"
              alt="Mama icon used as star"
            />
          ))}
        </span>

        <Corners />

        <div className="w-12 h-12 absolute bottom-4 right-4 border bg-white bg-opacity-25 flex">
          <span className="self-center justify-self-center mx-auto">
            SSS+
          </span>
        </div>
      </div>
      <div className="flex-1">
        <div className="text-xl">
          <span className="uppercase px-1 text-black bg-beige">
            {costume.character}
          </span>
          <span className="pl-2 uppercase text-beige">
            {costume.name.en}
          </span>
        </div>
        <p className="whitespace-pre-wrap text-sm mt-2"
          style={{
            color: "lightgrey",
          }}
          dangerouslySetInnerHTML={{ __html: costume.description.en }}
        ></p>
        <div className="mt-4">
          <strong>Character skill:</strong>
          <p>{costume.skills}</p>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row mt-3 gap-6">
          <StatsOfLevel stats={costume.statsLvl1} label="LVL 01" />
          <StatsOfLevel stats={costume.statsMax} label="LVL MAX (no asc)" />
          <StatsOfLevel stats={costume.statsMaxAsc} label="LVL MAX (w/ asc)" />
        </div>
      </div>
    </div>
  );
}

export default CostumeDetails;