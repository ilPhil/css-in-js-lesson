import "./App.css";

/* Compnenets */
import ScopedButton from "./components/ScopedButton";
import NotScopedButton from "./components/NotScopedButton";
import AnotherStupidButton from "./components/AnotherStupidButton";
import StetefullComponent from "./components/StetefullComponent";
import Card from "./components/Card";
import Review from "./components/Review";
import CardReactive from "./components/CardReactive";
import HtmlStyleComponent from "./components/HtmlStyleComponent";
import StyledButton from "./components/StyledButton";
import StyledExistingButton, {
  BoringButton,
} from "./components/StyledExistingButton";
import { BluButton, VioletButton } from "./components/ExtendedStyledComponet";
import StyledCard from "./components/StyledCard";
import AnimatedComponent from "./components/AnimatedComponent";
import ThemeComponent from "./components/ThemeComponent";

/* Assets */
import profileImage from "./assets/stefano.jpg";

function App() {
  return (
    <div className="App">
      <section className="App-section">
        <NotScopedButton>Hello i'm not scoped 😱</NotScopedButton>
        <AnotherStupidButton>
          <p>ciao</p> 🥸
        </AnotherStupidButton>
        <ScopedButton>Hello i'm scoped 🥳</ScopedButton>
      </section>
      <section className="App-section">
        <StetefullComponent>Statefull 🐰</StetefullComponent>
        <ScopedButton>Stateles 🦊</ScopedButton>
      </section>
      <section className="App-section">
        <Card
          image={profileImage}
          title="Stefano Russo"
          description="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget
          pretium lectus. Proin sed tortor eu sapien venenatis pretium. Donec sit
          amet pulvinar justo. Suspendisse potenti."
        />
        <Review
          title="Ottimo prodotto 🎉🎉🎉🎉🎉"
          description="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget pretium lectus. Proin sed tortor eu sapien venenatis pretium. Donec sit amet pulvinar justo. Suspendisse potenti. Quisque a arcu vitae justo consectetur auctor. Sed sed diam id ligula tristique elementum a quis nulla. Cras vel orci non ante finibus pretium sit amet sit amet sapien. Integer pharetra nisl tortor. In vitae vestibulum quam. Morbi volutpat vehicula est vitae efficitur. In in tellus tempus, interdum metus sit amet, consectetur sem. Proin porta est at urna imperdiet ultrices et vel nunc. Donec ultricies, leo ut convallis maximus, ipsum ligula placerat justo, feugiat gravida leo nulla nec ex."
        />
        <Review
          title="Non male 🔥"
          description="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget pretium lectus. Proin sed tortor eu sapien venenatis pretium. Donec sit amet pulvinar justo. Suspendisse potenti. Quisque a arcu vitae justo consectetur auctor. Sed sed diam id ligula tristique elementum a quis nulla. Cras vel orci non ante finibus pretium sit amet sit amet sapien. Integer pharetra nisl tortor. In vitae vestibulum quam. Morbi volutpat vehicula est vitae efficitur. In in tellus tempus, interdum metus sit amet, consectetur sem. Proin porta est at urna imperdiet ultrices et vel nunc. Donec ultricies, leo ut convallis maximus, ipsum ligula placerat justo, feugiat gravida leo nulla nec ex."
        />
      </section>
      <section className="App-section">
        <CardReactive
          image={profileImage}
          title="Stefano Russo"
          description="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget
          pretium lectus. Proin sed tortor eu sapien venenatis pretium. Donec sit
          amet pulvinar justo. Suspendisse potenti."
        />
        <HtmlStyleComponent>Test</HtmlStyleComponent>
      </section>
      <section className="App-section">
        <StyledButton>Styled 💅</StyledButton>
        {/* <StyledButton>Styled 💅</StyledButton> */}
        <BoringButton>Boring 🤮</BoringButton>
        <StyledExistingButton>Awesome 🤩</StyledExistingButton>
      </section>
      <section className="App-section">
        <BluButton>Blue</BluButton>
        <VioletButton>Violet</VioletButton>
      </section>
      <section className="App-section">
        <StyledButton>Styled Hover 💅</StyledButton>
        <StyledButton>Styled Hover 💅</StyledButton>
        <StyledButton>Styled 💅</StyledButton>
      </section>
      <section className="App-section">
        <StyledCard
          image={profileImage}
          title="Stefano Russo"
          description="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget
          pretium lectus. Proin sed tortor eu sapien venenatis pretium. Donec sit
          amet pulvinar justo. Suspendisse potenti."
        />
      </section>
      <section className="App-section">
        <AnimatedComponent>&lt; 💅🏾 &gt;</AnimatedComponent>
      </section>
      <section className="App-section">
        <ThemeComponent>&lt; 💅🏾 &gt;</ThemeComponent>
      </section>
    </div>
  );
}

export default App;
