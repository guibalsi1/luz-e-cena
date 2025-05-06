import SelectorGroup from "../../Selector/SelectorGroup"
import { FaLocationDot } from "react-icons/fa6"
import SelectorOption from "../../Selector/SelectorOption"

const cities = [
    { id: 1, name: "São Paulo" },
    { id: 2, name: "Rio de Janeiro" },
    { id: 3, name: "Belo Horizonte" },
    { id: 4, name: "Curitiba" },
    { id: 5, name: "Porto Alegre" },
];



const HeaderFormFilters = () => {
  return (
    <form>
        <SelectorGroup id="city" icon={<FaLocationDot/>}>
            <SelectorOption value="" label="Choose your City..." />
            {cities.map((city) => (
                <SelectorOption key={city.id} value={city.name} label={city.name} />
            ))}
        </SelectorGroup>
    </form>
  )
}

export default HeaderFormFilters