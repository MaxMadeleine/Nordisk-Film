import './Footer.scss'

export const Footer = () => {
  return (
    <footer className="footerWrapper">
      <div className='footerContainer'>
        <div className='footerTop'>
          <a href="https://www.egmont.com/"><img src="https://www.nfbio.dk/themes/custom/nfbiodk/assets/img/egmont-footer-logo.svg" alt="Egmont" /></a>
        </div>
        {/* Footer GridContainer */}
        <div className='footerGridContainer'>
          <div className='footerGridItemsWrapperOne'>

            {/* 1. */}
            <div className='footerGridItemOne'>
  <h3>About NF Posters</h3>
  <ul>
    <li><a href="#">Questions and answers</a></li>
    <li><a href="#">About Nordisk Film Cinemas</a></li>
    <li><a href="#">About Nordisk Film</a></li>
    <li><a href="#">Poster overview</a></li>
    <li><a href="#">Partner Posters</a></li>
    <li><a href="#">Jobs at NF POSTER</a></li>
    <li><a href="#">Payment terms</a></li>
    <li><a href="#">Privacy and cookie policy</a></li>
    <li><a href="#">Danish poster and entertainment panel</a></li>
    <li><a href="#">Update cookie consent</a></li>
  </ul>
</div>
{/* 2. */}
<div className='footerGridItemTwo'>
  <h3>Poster plus</h3>
  <ul>
    <li><a href="#">Sign up for the newsletter</a></li>
    <li><a href="#">Become a member</a></li>
    <li><a href="#">Membership terms</a></li>
    <li><a href="#">POSTER PLUS UNLIMITED</a></li>
    <li><a href="#">POSTER PLUS and POSTER PLUS UNLIMITED FAQ</a></li>
  </ul>
</div>
</div>
<div className='footerGridItemsWrapperTwo'>
  {/* 3 */}
  <div className='footerGridItemThree'>
    <h3>Business</h3>
    <ul>
      <li><a href="#">Gift tickets</a></li>
      <li><a href="#">Conferences and meetings</a></li>
      <li><a href="#">Special screenings</a></li>
      <li><a href="#">Cinema advertising</a></li>
    </ul>
  </div>
  {/* 4. */}
  <div className='footerGridItemFour'>
    <h3>Follow us</h3>
    <div className='socialMedia'>
      <a href="pinterest.com"><img src="/src/assets/images/PinterestBlue.svg" alt="Pinterest" /></a>
      <a href="instagram.com"><img src="/src/assets/images/instagramBlue.svg" alt="Instagram" /></a>
      <a href="facebook.com"><img src="/src/assets/images/facebookBlue.svg" alt="Facebook" /></a>
      <a href="x.com"><img src="/src/assets/images/twitterBlue.svg" alt="Twitter" /></a>
    </div>
  </div>
</div>
</div>
</div>
</footer>

  )
}