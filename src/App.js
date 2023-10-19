import {
  Title,
  Logos,
  TimerChild,
  Container,
  TimerContainer,
} from "./components";

export default function App() {
  return (
    <Container>
      <Title />
      <TimerContainer>
        <TimerChild num="23" title="days" />
        <TimerChild num="23" title="hours" />
        <TimerChild num="23" title="minutes" />
        <TimerChild num="23" title="seconds" />
      </TimerContainer>
      <Logos />
    </Container>
  );
}
