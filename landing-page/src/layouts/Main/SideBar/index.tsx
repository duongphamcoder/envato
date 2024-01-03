// Components
import Button from '@app/components/Button/index.tsx';
import CloseSideBar from '@app/components/icons/CloseSideBar/index.tsx';

// Mocks
import { NAVBAR } from '@app/mocks';

// Constant
import { ROUTES } from '@app/constants';

// TODO: Update to late
const pathName: string = '/';

type TSidebarProps = {
  isOpen?: boolean;
  onToggle?: () => void;
};

const SideBarAllDevices = ({
  isOpen = false,
  onToggle,
}: TSidebarProps): JSX.Element => (
  <header
    className={`fixed md:relative z-50 w-[320px] bg-white py-[60px] px-[70px] h-full animate-sidebarSlideIn md:animate-none md:block ${
      isOpen ? 'block' : 'hidden'
    }`}
  >
    <Button
      className='flex md:hidden bg-sun w-10 h-10 justify-center items-center absolute top-0 right-md'
      onclick={onToggle}
    >
      <CloseSideBar width={10} height={12} />
    </Button>
    <h1 className='mb-[100px]'>
      <a href={ROUTES.HOME}>
        <img
          src='/assets/logo-header-mobile.webp'
          alt='Logo'
          width={137}
          height={55}
          loading='lazy'
        />
      </a>
    </h1>
    <nav>
      <ul>
        {NAVBAR.map(
          ({ id, href, text }): JSX.Element => (
            <li key={id}>
              <a
                href={href}
                className={`${
                  href === pathName ? 'text-sun' : ''
                } text-secondary hover:text-sun uppercase text-sm leading-[53px] py-5 relative w-min-content after:w-0 after:h-1 after:transition-all after:duration-500 hover:after:absolute hover:after:z-10 hover:after:top-[50%] hover:after:left-[-70px] hover:after:w-[30px] hover:after:h-[3px] hover:after:bg-sun`}
              >
                {text}
              </a>
            </li>
          ),
        )}
      </ul>
    </nav>
  </header>
);

export default SideBarAllDevices;