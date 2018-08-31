int ledPin = 16;
// the setup function runs once when you press reset or power the board


void setup()
{
    
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(ledPin, OUTPUT);

}
void loop()
{
    
  digitalWrite(ledPin, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(5000);                       // wait for a second
  digitalWrite(ledPin, LOW);    // turn the LED off by making the voltage LOW
  delay(500000000000);                       // wait for a second

}