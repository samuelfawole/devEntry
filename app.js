const labels = document.querySelectorAll('.form-cntrl label')
const btnRegister = document.querySelectorAll('.btn-square')
const modal = document.querySelector('.modal')
const header = document.querySelector('#header')
const features = document.querySelector('#features')
const close = document.querySelector('#close')

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join('')
})
btnRegister.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.style.display = 'flex'
    header.style.filter = 'blur(0.5px)'
  })
})

window.onclick = (e) => {
  if (e.target == close) {
    modal.style.display = 'none'
    header.style.filter = 'none'
  }
}
if (window.innerWidth < 650) {
  features.innerHTML = `<div class="feature">
  <div class="feature-text">
    <div class="feature-text--primary">Rising Developers</div>
    <div class="feature-text--secondary">
      Find developers and designers across the world that have be tested
      and take your business to the next level. less risk of employing
      unskilled/unprofessional developers.
    </div>
  </div>
  <img
    src="img/software-engineer.svg"
    alt="man-developing-website-on-desk"
  />
</div>
<div class="feature">
  <div class="feature-text">
    <div class="feature-text--primary">Verified Portfolios</div>
    <div class="feature-text--secondary">
      Find developers and designers with Great portfolios of fully
      optimized websites, webapps with great designs with at least basic
      Knowledge in SEO, really skilled and just looking to get their foot
      in the door of the software industry. Check out developers with the
      most liked portfolios.
      <div class="cta">
        <a href="#" class="btn btn-cyan">Top Portfolios</a>
      </div>
    </div>  
  </div>
  <img
    src="img/to-do-list-1742872-0.svg"
    alt="man-developing-website-on-desk"
  />
</div>
<div class="feature">
  <div class="feature-text">
    <div class="feature-text--primary">Professional Screening</div>
    <div class="feature-text--secondary">
      All devEntry developers have gone through professional interviews
      and screening, saving your organisations time on Recruitment; going
      through lots and lots of applications looking for the most qualified
      devs.
      <p>
        All devEntry developers are great you just have to find the right
        match for your project or team.
      </p>
      <div class="cta">
        <a href="#" class="btn btn-cyan">See Top Devs</a>
      </div>
    </div>
  </div>
  <img
    id="feature-img--3"
    src="img/business-interview.svg"
    alt="man-developing-website-on-desk"
  />
</div>`
} else {
  null
}
