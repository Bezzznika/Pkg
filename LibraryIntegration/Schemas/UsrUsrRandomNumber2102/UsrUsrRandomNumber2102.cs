using System;

namespace UsrRandomNumber2102
{
    public class RandomNumberGenerator
    {
        private readonly Random _random;

        public RandomNumberGenerator()
        {
            _random = new Random();
        }

        public int Generate(int minValue, int maxValue)
        {
            return _random.Next(minValue, maxValue);
        }
    }
}
