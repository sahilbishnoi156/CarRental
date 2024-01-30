import { carData } from "@/Components/CarsData/CarsData";
export default function sitemap() {
  const baseUrl = "https://kanhacars.vercel.app/";
  const carUrls =
    carData.map((car, index) => {
      return {
        url: `${baseUrl}/allCars/${car.id}?name=${car.name}&amp;modal=${
          car.modal
        }`,
        lastModified: new Date(),
        priority: 0.8,
      };
    }) ?? [];
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...carUrls,
  ];
}
