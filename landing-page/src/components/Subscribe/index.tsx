// Components
import SubscribeForm from './SubcribeForm';

export const Subscribe = (): JSX.Element => (
  <section className='mt-[70px] lg:mt-0 py-[100px] bg-iridium'>
    <div className='container m-auto px-5 lg:flex gap-[30px] items-center'>
      <div className='flex-1'>
        <h2 className='text-3xl text-white font-normal'>
          Subscribe for a <span className='text-sun'>25% Discount</span>
        </h2>
        <p className='pt-2 text-little text-base font-normal'>
          Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit amet
          mi vulputate consectetur. Donec auctor interdum purus, ac finibus
          massa bibendum nec.
        </p>
      </div>
      <div className='flex-1'>
        <SubscribeForm />
      </div>
    </div>
  </section>
);
