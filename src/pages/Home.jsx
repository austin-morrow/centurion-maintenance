import Logo from '../assets/brand/cm-logo.png';

export default function Home() {
  return (
    <>
      <section name='home' className='coverImg'>
        {/* Logo */}
        <div className='max-w-[700px] 2xl:max-w-[600px] mx-auto px-20 pt-20 flex flex-col justify-center h-full'>
          <img src={Logo} alt='logo' />
        </div>
      </section>
    </>
  )
}