export default function SectionTitle({ title, subtitle }: Readonly<{ title: string, subtitle?: string }>) {


    return (
        <div className="my-6">
            <h1 className="text-4xl font-semibold leading-normal text-left text-black dark:text-white">{title}</h1>

            {subtitle && <p className="mt-4 leading-8 text-black dark:text-white lg:text-lg text-md muted ">{subtitle}</p>}
        </div>
    )
}