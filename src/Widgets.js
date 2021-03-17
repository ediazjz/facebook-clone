import './Widgets.css';

const Widgets = () => {
  return (
    <div className="widgets">
      <h2>Built by:</h2>
      <div className="hola"></div>
      <div className="hola"></div>
      <div className="hola"></div>
      <div className="hola"></div>
      <div className="hola"></div>
      <iframe
        title="facebook"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fediazjz&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340" 
        height="100%"
        style={{ border:"none", overflow:"hidden" }}
        scrolling="no"
        frameBorder="0"
        allow="encrypted-media"></iframe>
    </div>
  )
}

export default Widgets
