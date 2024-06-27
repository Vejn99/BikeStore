export interface NavItemsInterface {
  navbarItems: NavbarItem[];
}

interface NavbarItem {
  name: string;
  href: string;
  isActive?: boolean;
}
