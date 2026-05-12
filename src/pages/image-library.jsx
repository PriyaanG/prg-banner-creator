import { title } from "../components/primitives";
import DefaultLayout from "../layouts/default";
import {Button} from "@heroui/button";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection} from "@heroui/dropdown"
import React from "react"

const images = [
  {name: "dlA330ILAR.png", id:1, filepath: "/A330delta.webp", airline:["Delta"], airport:["ILAR"], plane:["Airbus A330"]},
  {name: "Vite Image", id:2, filepath: "/A330delta.webp", airline: ["American Airlines"], airport: ["IRFD"], plane: ["Airbus A340"]},
]

// Deduplicated airlines
const airlines = [
  "Aer Lingus",
  "Aer Lingus Regional",
  "Aeroflot",
  "Air Canada",
  "Air France",
  "Air New Zealand",
  "AirBaltic",
  "American Airlines",
  "Azul",
  "Azul Conecta",
  "Blue Angels",
  "British Airways",
  "Cathay Pacific",
  "Cebu Pacific",
  "Condor",
  "Delta",
  "DHL",
  "EasyJet",
  "Emirates",
  "FedEx",
  "Flybe",
  "Iberia",
  "Jet2",
  "JetBlue",
  "KLM",
  "Korean Air",
  "Korean Air Cargo",
  "LOT",
  "Lufthansa",
  "Pan Am",
  "Qantas",
  "Qatar Airways",
  "Red Arrows",
  "Ryanair",
  "Scandinavian Airlines",
  "Singapore Airlines",
  "Southwest",
  "Spirit",
  "Staff Livery",
  "Swiss Airlines",
  "Thai Airways",
  "Thomas Cook",
  "Tui",
  "Turkish Airlines",
  "United Airlines",
  "UPS",
  "Wizz Air",
  "Yeti Airlines",
];


// Group airlines by first letter
const groupedAirlines = {};
airlines.forEach((airline) => {
  const firstLetter = airline[0].toUpperCase();
  if (!groupedAirlines[firstLetter]) groupedAirlines[firstLetter] = [];
  groupedAirlines[firstLetter].push(airline);
});

// Sort each group alphabetically
Object.keys(groupedAirlines).forEach((letter) => {
  groupedAirlines[letter].sort();
});

export default function DocsPage() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Airport Filter"]));
  const [selectedPlane, setSelectedPlane] = React.useState(new Set(["Plane Filter"]));
  const [selectedAirline, setSelectedAirline] = React.useState(new Set(["Select Airline"]));

// Map for Images
const filteredImages = images.filter((img) => {
  const airportValue = selectedKeys.size > 0 ? Array.from(selectedKeys)[0] : null;
const planeValue = selectedPlane.size > 0 ? Array.from(selectedPlane)[0] : null;
const airlineValue = selectedAirline.size > 0 ? Array.from(selectedAirline)[0] : null;
  return (
    (!airportValue || img.airport.includes(airportValue)) &&
    (!planeValue || img.plane.includes(planeValue)) &&
    (!airlineValue || img.airline.includes(airlineValue))
  );
});

 const ImageList = filteredImages.map(image => 
 <div className="w-50 m-5 mb-5">
          <img className="justify-center ml-auto mr-auto w-50 h-25" src={image.filepath} />
          <h2 className="justify-center text-center">{image.name}</h2>
          <a href={image.filepath} download={image.name}>
          <Button className="mt-2 w-full bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]"  startContent=<img className="mr-auto" width="25px" height="25px" src="/downloadicon.png"/>><p className=" text-center mr-auto">Download</p></Button>
        </a>
        </div>)

  const selectedPlaneValue = React.useMemo(
    () => Array.from(selectedPlane).join(", ").replace(/_/g, ""),
    [selectedPlane])

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys],    
  );


   function NoFilterApplied(keys, func){
      const value = Array.from(keys)[0];
      console.log(value)
      if (value.includes("Applied")){
        func(new Set([]))
      } else {
        func(new Set([value]))
      }
    }
  return (
    
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Image Library</h1>
        </div>
      </section>
      <div >
      <h3>Filters</h3>
         <Dropdown>
  <DropdownTrigger>
  <Button startContent=
  <img src="/airport_10903216.png" width="25px" height="25px"></img> variant="bordered" className="mr-5 bg-gradient-to-b from-[#00b7fa] to-[#01cfea] ...">{selectedValue}</Button>
  </DropdownTrigger>

  <DropdownMenu className="max-h-64 overflow-y-auto"
  disallowEmptySelection
        aria-label="Single selection example"
        selectedKeys={selectedKeys}
        selectionMode="single"
        variant="solid"
        onSelectionChange={keys => NoFilterApplied(keys, setSelectedKeys)}
        >
              <DropdownSection showDivider title="No Filter">
  <DropdownItem key="No Airport Filter Applied">No Airport Filter</DropdownItem>
  </DropdownSection>
    {/* Cyprus */}
     <DropdownSection showDivider title="Cyprus">
    <DropdownItem key="IBAR">Barra Airport</DropdownItem>
    <DropdownItem key="IHEN">Henstridge Airfield</DropdownItem>
    <DropdownItem key="ILAR">Larnaca Intl.</DropdownItem>
    <DropdownItem key="IIAB">McConnell AFB</DropdownItem>
    <DropdownItem key="IPAP">Paphos Intl.</DropdownItem>
</DropdownSection>
    {/* Grindavik */}
<DropdownSection showDivider title="Grindavik">
    <DropdownItem key="IGRV">Grindavik Airport</DropdownItem>
    </DropdownSection>
    {/* Izolirani */}
    <DropdownSection  showDivider title="Izolirani">
    <DropdownItem key="IJAF">Al Najaf</DropdownItem>
    <DropdownItem key="IZOL">Izolirani Intl.</DropdownItem>
    <DropdownItem key="ISCM">RAF Scampton</DropdownItem>
</DropdownSection>
    {/* Orenji */}
     <DropdownSection  showDivider title="Orenji">
    <DropdownItem key="IBRD">Bird Island Airfield</DropdownItem>
    <DropdownItem key="IDCS">Saba Airport</DropdownItem>
    <DropdownItem key="ITKO">Tokyo Intl.</DropdownItem>
</DropdownSection>
    {/* Perth */}
      <DropdownSection showDivider title="Perth">
    <DropdownItem key="ILKL">Lukla Airport</DropdownItem>
    <DropdownItem key="IPPH">Perth Intl.</DropdownItem>
</DropdownSection>
    {/* Rockford */}
    <DropdownSection  showDivider title="Greater Rockford">
    <DropdownItem key="IGAR">Air Base Garry</DropdownItem>
    <DropdownItem key="IBLT">Boltic Airfield</DropdownItem>
    <DropdownItem key="IRFD">Greater Rockford</DropdownItem>
    <DropdownItem key="IMLR">Mellor Intl.</DropdownItem>
    <DropdownItem key="ITRC">Training Centre</DropdownItem>
    </DropdownSection>

    {/* Saint Barthelemy */}
     <DropdownSection  showDivider title="Saint Barthelemy">
    <DropdownItem key="IBTH">Saint Barthelemy</DropdownItem>
    <DropdownItem key="IUFO">UFO Base</DropdownItem>
    </DropdownSection>

    {/* Sauthamptona */}
       <DropdownSection  showDivider title="Sauthamptona">
    <DropdownItem key="ISAU">Sauthamptona Airport</DropdownItem>
    </DropdownSection>
      <DropdownSection  showDivider title="Oil Rig">
        <DropdownItem key="IOIL">Oil Rig</DropdownItem>
      </DropdownSection>
  </DropdownMenu>
</Dropdown>
<Dropdown>
  <DropdownTrigger>
    <Button variant="solid" startContent=<img src="/flight_9716740.png" width="25px" height="25px"></img> className="mr-5 bg-gradient-to-b from-[#00b7fa] to-[#01cfea] ...">{selectedPlaneValue}</Button>
  </DropdownTrigger>

  <DropdownMenu
    className="max-h-64 overflow-y-auto"
    disallowEmptySelection
    aria-label="Plane selection"
    selectedKeys={selectedPlane}
    selectionMode="single"
    variant="flat"
    onSelectionChange={keys => NoFilterApplied(keys, setSelectedPlane)}
  >
      <DropdownSection title="No Filter" showDivider>
      <DropdownItem key="No Plane Filter Applied">No Plane Filter</DropdownItem>
      </DropdownSection>
    {/* Airlines */}
    <DropdownSection title="Airliners" showDivider>
      <DropdownItem key="Airbus A220">Airbus A220</DropdownItem>
      <DropdownItem key="Airbus A320">Airbus A320</DropdownItem>
      <DropdownItem key="Airbus A330">Airbus A330</DropdownItem>
      <DropdownItem key="Airbus A340">Airbus A340</DropdownItem>
      <DropdownItem key="Airbus A350">Airbus A350</DropdownItem>
      <DropdownItem key="Airbus A380">Airbus A380</DropdownItem>
      <DropdownItem key="Boeing 707">Boeing 707</DropdownItem>
      <DropdownItem key="Boeing 727">Boeing 727</DropdownItem>
      <DropdownItem key="Boeing 737">Boeing 737</DropdownItem>
      <DropdownItem key="Boeing 747">Boeing 747</DropdownItem>
      <DropdownItem key="Boeing 757">Boeing 757</DropdownItem>
      <DropdownItem key="Boeing 767">Boeing 767</DropdownItem>
      <DropdownItem key="Boeing 777">Boeing 777</DropdownItem>
      <DropdownItem key="Boeing 787">Boeing 787</DropdownItem>
      <DropdownItem key="Bombardier CRJ700">Bombardier CRJ700</DropdownItem>
      <DropdownItem key="Bombardier Q400">Bombardier Q400</DropdownItem>
      <DropdownItem key="Concorde">Concorde</DropdownItem>
      <DropdownItem key="McDonnell Douglas DC-10">McDonnell Douglas DC-10</DropdownItem>
      <DropdownItem key="McDonnell Douglas MD-11">McDonnell Douglas MD-11</DropdownItem>
      <DropdownItem key="McDonnell Douglas MD-90">McDonnell Douglas MD-90</DropdownItem>
    </DropdownSection>

    {/* Cargo */}
    <DropdownSection title="Cargo" showDivider>
      <DropdownItem key="Airbus BelugaXL">Airbus BelugaXL</DropdownItem>
      <DropdownItem key="Antonov An-22">Antonov An-22</DropdownItem>
      <DropdownItem key="Antonov AN-225">Antonov AN-225</DropdownItem>
      <DropdownItem key="Boeing C-17 Globemaster III">Boeing C-17 Globemaster III</DropdownItem>
      <DropdownItem key="Boeing Dreamlifter">Boeing Dreamlifter</DropdownItem>
    </DropdownSection>

    {/* Light Aircraft */}
    <DropdownSection title="Light Aircraft" showDivider>
      <DropdownItem key="Beechcraft King Air 260">Beechcraft King Air 260</DropdownItem>
      <DropdownItem key="Cirrus Vision SF50">Cirrus Vision SF50</DropdownItem>
      <DropdownItem key="Cessna 172">Cessna 172</DropdownItem>
      <DropdownItem key="Cessna 182">Cessna 182</DropdownItem>
      <DropdownItem key="Cessna 402">Cessna 402</DropdownItem>
      <DropdownItem key="Cessna Caravan">Cessna Caravan</DropdownItem>
      <DropdownItem key="DHC-6 Twin Otter">DHC-6 Twin Otter</DropdownItem>
      <DropdownItem key="Diamond DA50">Diamond DA50</DropdownItem>
      <DropdownItem key="Piper Cub">Piper Cub</DropdownItem>
      <DropdownItem key="Piper PA-28">Piper PA-28</DropdownItem>
    </DropdownSection>

    {/* Modern Military */}
    <DropdownSection title="Modern Military" showDivider>
      <DropdownItem key="Eurofighter Typhoon">Eurofighter Typhoon</DropdownItem>
      <DropdownItem key="F-14 Tomcat">F-14 Tomcat</DropdownItem>
      <DropdownItem key="F-15E Strike Eagle">F-15E Strike Eagle</DropdownItem>
      <DropdownItem key="F-16 Fighting Falcon">F-16 Fighting Falcon</DropdownItem>
      <DropdownItem key="F-22 Raptor">F-22 Raptor</DropdownItem>
      <DropdownItem key="F-35B">F-35B</DropdownItem>
      <DropdownItem key="F/A-18 Super Hornet">F/A-18 Super Hornet</DropdownItem>
    </DropdownSection>

    {/* Old Military */}
    <DropdownSection title="Old Military" showDivider>
      <DropdownItem key="A-10 Warthog">A-10 Warthog</DropdownItem>
      <DropdownItem key="A6M Zero">A6M Zero</DropdownItem>
      <DropdownItem key="Avro Vulcan">Avro Vulcan</DropdownItem>
      <DropdownItem key="B-1 Lancer">B-1 Lancer</DropdownItem>
      <DropdownItem key="B-2 Spirit">B-2 Spirit</DropdownItem>
      <DropdownItem key="B29">B29</DropdownItem>
      <DropdownItem key="English Electric Lightning">English Electric Lightning</DropdownItem>
      <DropdownItem key="F4U Corsair">F4U Corsair</DropdownItem>
      <DropdownItem key="Fokker Dr1">Fokker Dr1</DropdownItem>
      <DropdownItem key="Hawker Harrier">Hawker Harrier</DropdownItem>
      <DropdownItem key="Hawker Hurricane">Hawker Hurricane</DropdownItem>
      <DropdownItem key="Mig-15">Mig-15</DropdownItem>
      <DropdownItem key="P-38 Lightning">P-38 Lightning</DropdownItem>
      <DropdownItem key="P-51 Mustang">P-51 Mustang</DropdownItem>
      <DropdownItem key="SR-71 Blackbird">SR-71 Blackbird</DropdownItem>
    </DropdownSection>

    {/* Helicopters */}
    <DropdownSection title="Helicopters" showDivider>
      <DropdownItem key="Airbus H135">Airbus H135</DropdownItem>
      <DropdownItem key="Bell 412">Bell 412</DropdownItem>
      <DropdownItem key="Chinook">Chinook</DropdownItem>
      <DropdownItem key="Hawk T1">Hawk T1</DropdownItem>
      <DropdownItem key="Helicopter Particles">Helicopter Particles</DropdownItem>
      <DropdownItem key="Sikorsky S-92">Sikorsky S-92</DropdownItem>
      <DropdownItem key="UH-60 Black Hawk">UH-60 Black Hawk</DropdownItem>
    </DropdownSection>

    {/* Amphibious */}
    <DropdownSection title="Amphibious" showDivider>
      <DropdownItem key="Seaplane Package">Seaplane Package</DropdownItem>
      <DropdownItem key="Walrus">Walrus</DropdownItem>
    </DropdownSection>

    {/* Random / Misc */}
    <DropdownSection title="Random" showDivider>
      <DropdownItem key="Abandoned Airfield">Abandoned Airfield</DropdownItem>
      <DropdownItem key="ATC">ATC</DropdownItem>
      <DropdownItem key="Blimp">Blimp</DropdownItem>
      <DropdownItem key="Derek's Creation">Derek's Creation</DropdownItem>
      <DropdownItem key="Military UFO">Military UFO</DropdownItem>
      <DropdownItem key="Outfit Picker">Outfit Picker</DropdownItem>
      <DropdownItem key="Paratrike">Paratrike</DropdownItem>
      <DropdownItem key="Santa's Sled">Santa's Sled</DropdownItem>
    </DropdownSection>

    {/* Tankers */}
    <DropdownSection title="Tankers" showDivider>
      <DropdownItem key="KC767">KC767</DropdownItem>
      <DropdownItem key="Lockheed L-1011 Tristar">Lockheed L-1011 Tristar</DropdownItem>
      <DropdownItem key="McDonnell Douglas MD-11">McDonnell Douglas MD-11</DropdownItem>
    </DropdownSection>
  </DropdownMenu>
</Dropdown>
<Dropdown>
      <DropdownTrigger>
        <Button variant="solid" startContent=<img src="/flight_9716740.png" width="25px" height="25px"></img> className="bg-gradient-to-b from-[#00b7fa] to-[#01cfea] ...">{selectedAirline}</Button>
      </DropdownTrigger>

      <DropdownMenu
      className="max-h-64 overflow-y-auto"
        aria-label="Airline selection"
        selectedKeys={selectedAirline}
        selectionMode="single"
        onSelectionChange={keys => NoFilterApplied(keys, setSelectedAirline)}
      >
        <DropdownSection title="No Filter" showDivider>
          <DropdownItem key="No Airline Filter Applied">No Airline Filter</DropdownItem>
        </DropdownSection>
        {Object.keys(groupedAirlines)
          .sort()
          .map((letter) => (
            <DropdownSection key={letter} title={letter} showDivider>
              {groupedAirlines[letter].map((airline) => (
                <DropdownItem key={airline}>{airline}</DropdownItem>
              ))}
            </DropdownSection>
          ))}
      </DropdownMenu>
    </Dropdown>
    </div>
     <section className="flex place-content-between flex-wrap">
        {ImageList}
         </section>
    </DefaultLayout>
  );
}
