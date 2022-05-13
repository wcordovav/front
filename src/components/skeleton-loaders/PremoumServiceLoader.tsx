import ContentLoader from "react-content-loader"


const PremiumServiceLoader = () => (
  <div className="skeleton-container" >
  <ContentLoader 
    className="skeleton-loader"
    speed={2}
    width={1200}
    height={700}
    viewBox="0 0 1200 700"
    backgroundColor="#d3d0d0"
    foregroundColor="#ecebeb"
    style={{margin: "0 auto", display: "block", width: "100%", height: "100%"}}
  >
  <rect x="0" y="160" rx="10" ry="10" width="1200" height="600" /> 
  <rect x="300" y="36" rx="10" ry="10" width="600" height="26" /> 
  <rect x="400" y="88" rx="10" ry="10" width="400" height="15" />
</ContentLoader>
  </div>
  
)

export default PremiumServiceLoader

