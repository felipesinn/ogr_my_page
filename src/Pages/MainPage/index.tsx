import { Button, ImgPrimary, MainPrimary } from "./styles";

export function MainPage() {
  return (
      <MainPrimary>
        <Title />
      </MainPrimary>
  );
}

export function Title() {
  return (
    <ImgPrimary>
      <h1>Ads tha Work</h1>
      <p>
        Lorem ipsum dolor, sit amet
        <br />
        consectetur adipisicing elit. Nihil expedita, ?
      </p>
      <Button>Sign Up Today</Button>
    </ImgPrimary>
  );
}
