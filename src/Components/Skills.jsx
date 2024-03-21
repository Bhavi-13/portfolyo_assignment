
function Skills({apiData}) {
  return (
    <section className="skills pt_105 xs_pt_65 pb_120 xs_pb_80" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-xl-11 m-auto">
            <h2 className="has-animation">
              I craft wonderful digital experiences for brands
            </h2>
          </div>
        </div>
          <div className="row justify-content-between">
          {apiData && apiData.user && apiData.user.skills && apiData.user.skills.map(skill => (
            <div className="col-xl-2 col-sm-4 col-lg-3" key={skill.id}>
              <div className="single_skills fade_left" data-trigerId="skills">
                <div className="text">
                  <div className="icon">
                    <img
                      src={skill.image.url}
                      alt="skills"
                      className="img-fluid" />
                  </div>
                  <h3><span className="counter">{skill.percentage}</span>%</h3>
                </div>
                <p> {skill.name} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
