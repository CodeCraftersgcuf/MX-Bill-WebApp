import { theme } from "../constants"

const ColorScheme = () => {


    return (

        <div className="grid grid-cols-6 gap-2">
            {Object.keys(theme.COLORS).map(color => {
                const bg = `bg-[${theme.COLORS[color]}]`
                return (
                    <div key={color} className={`p-4 flex justify-center items-center `}
                        style={{
                            backgroundColor: theme.COLORS[color]
                        }}
                    >
                        <p className="text-white">{color}</p>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default ColorScheme