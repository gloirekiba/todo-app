function rand(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export default function random() {
  return rand(0, 50000);
}
