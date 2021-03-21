import { Avatar } from "@material-ui/core"

const Widgets = () => {
  return (
    <div className="widgets w-3/12 py-4 hidden xl:block sticky top-14">
      <div className="widgets__collaborators px-2">
        <h2 className="mb-4 text-2xl font-semibold">Built by:</h2>
        <div className="widgets__collaborator py-2 px-3 flex items-center bg-white rounded-md shadow-sm">
          <Avatar src="https://avatars.githubusercontent.com/u/39472121?s=460&u=3935d1cb4726a43db2a5237bb3003f4ec68ea8d8&v=4" />
          <span className="ml-3 font-medium">Edgar Diaz</span>
        </div>
      </div>
    </div>
  )
}

export default Widgets
