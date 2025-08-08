import { useNavigate } from "react-router-dom";

const HomeBrands = () => {
  const navigate = useNavigate();

  const goToLinkHandler = () => {
      navigate("/brands");
      window.scrollTo({top: 0,left: 0,behavior: "smooth",});
  };
  return (
    <div id="brands" className="flex gap-2 mt-2">
      <button className=" rounded-xl overflow-hidden transition-all hover:scale-90 shadow-md hover:shadow-lg aspect-square w-1/4 md:w-1/6" onClick={goToLinkHandler}>
          <img src="/marvel-tile.jfif" alt="MArvel" className="w-full h-full object-cover" />
        </button>
        <button className=" rounded-xl overflow-hidden transition-all hover:scale-90 shadow-md hover:shadow-lg w-1/4 md:w-1/6" onClick={goToLinkHandler}>
          <img src="https://www.thetoyshop.com/medias/TE-Homepage-pod-350x350px-Barbie.jpg?context=bWFzdGVyfHJvb3R8NTk4OTh8aW1hZ2UvanBlZ3xhR1V3TDJneU55OHhNak00TlRFMU56QTROekkyTWk5VVJTMUliMjFsY0dGblpTMXdiMlJmTXpVd2VETTFNSEI0WDBKaGNtSnBaUzVxY0djfDBhOTM3YzkwZmEzNGFlOWFiOGIxMTcyMjdkZWY5M2U1Nzc2N2U4ZGI5ZGNmZTg0OGUzMTBjMDAyNmYyMmQ1NmI" alt="Barbie" />
        </button>
        <button className=" rounded-xl overflow-hidden transition-all hover:scale-90 shadow-md hover:shadow-lg w-1/4 md:w-1/6" onClick={goToLinkHandler}>
          <img src="https://www.thetoyshop.com/medias/Polly.jpg?context=bWFzdGVyfHJvb3R8NzA0ODF8aW1hZ2UvanBlZ3xhRGxpTDJoaU5pOHhNalUxTmpJM05UVXhOVFF5TWk5UWIyeHNlUzVxY0djfDcyZGE4NzMwMzdiMmFkYTZlZGU2ZDNkMzg3N2I4ZmFkODRmZmZhZTI4Y2MxZDJmZmZmZDY5OGQ5ODA4MmQ0MDY" alt="Polly Pocket" />
        </button>
        <button className=" rounded-xl overflow-hidden transition-all hover:scale-90 shadow-md hover:shadow-lg w-1/4 md:w-1/6" onClick={goToLinkHandler}>
          <img src="https://www.thetoyshop.com/medias/PAW-UK-Entertainer-Digital-Banners-DEL7-350x350.jpg?context=bWFzdGVyfHJvb3R8MTI1NDc2fGltYWdlL2pwZWd8YUdVeUwyZzJZeTh4TWpJeE5UTTBOemt3TkRVME1pOVFRVmRmVlV0ZlJXNTBaWEowWVdsdVpYSmZSR2xuYVhSaGJGOUNZVzV1WlhKelgwUkZURGRmTXpVd2VETTFNQzVxY0djfDViNTU2YWExNGQ4YzczZWJmMDNkOGJkMmQ2ZDk4YjllYmRhMzMwMmE4OThkNGM3MGFlY2JkMGU5M2NjMzk4MjM" alt="Paw Patrol" />
        </button>
        <button className=" rounded-xl overflow-hidden transition-all hover:scale-90 shadow-md hover:shadow-lg hidden md:block w-1/6" onClick={goToLinkHandler}>
          <img src="https://www.thetoyshop.com/medias/TE-Homepage-pod-350x350px-HW.jpg?context=bWFzdGVyfHJvb3R8MTAwOTc5fGltYWdlL2pwZWd8YURWaUwyZ3lZUzh4TWpNNE5URTFOamMxT1RVNE1pOVVSUzFJYjIxbGNHRm5aUzF3YjJSZk16VXdlRE0xTUhCNFgwaFhMbXB3Wnd8OTVhMTZmYWVmNTk1N2E1MmRkMTM0NGE5YWE2ZDU4MDc4ZDIzMTE1NjE0YWM5Mzg3ODhiZTE1NWFhNzI3ODU2YQ" alt="Hot Wheels" />
        </button>
        <button className=" rounded-xl overflow-hidden transition-all hover:scale-90 shadow-md hover:shadow-lg hidden md:block w-1/6" onClick={goToLinkHandler}>
          <img src="https://www.thetoyshop.com/medias/TE-Homepage-Pod-Minecraft.jpg?context=bWFzdGVyfHJvb3R8MTI2NTg5fGltYWdlL2pwZWd8YUdaakwyZ3hNeTh4TWpRM01qWXpPREUzTnpNeE1DOVVSU0JJYjIxbGNHRm5aU0JRYjJSZlRXbHVaV055WVdaMExtcHdad3w2MTExNDM5NjFhNTFmZmViNGEyNDg1OTYyMTliZjFkYTYwODQ3NzJmYzU3YzVmYTAzNTJkZWRiMWU3NDQ5NGMz" alt="Minecraft" />
        </button>
    </div>
  )
}

export default HomeBrands