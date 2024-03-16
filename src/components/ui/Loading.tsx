import "./styles/index.css"

export default function Loading({loaderName}: {loaderName: string}) {
  return (
    <div className="moving-loading text-white text-5xl w-full h-full">{loaderName}</div>
  )
}
