import styled from 'styled-components';

export const ThemeToggleButton: React.FC<{ currentTheme: string, setTheme: React.Dispatch<React.SetStateAction<string>> }> = ({ currentTheme, setTheme }) => {

   return <ThemeButton theme={currentTheme} onClick={() => setTheme((currentTheme: string) => currentTheme === 'light' ? 'dark' : 'light')} />;

};

const ThemeButton = styled.button`

   position: fixed;
   display: block;
   z-index: 1996;
   height: 30px;
   width: 60px;
   right: 115px;
   top: 55px;
   background: var(--theme-toggle-bg);
   cursor: pointer;
   border-radius: 30px;
   padding: 3px;

   &::after{
      content: '';
      display: block;
      position: relative;
      width: 40%;
      padding-top: 40%;
      border-radius: 50%;
      background: black;
      transition-property: left;
      transition-duration: .4s;
      left: ${(props: { theme: string }) => props.theme === 'light' ? '0%' : '60%'};
   }

`;