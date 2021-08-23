## Bit Hacks!

This is a primer on binary, numbering systems, and how we can leverage the properties of the binary numbering system to do some really cool math to make our computers run faster!

This entire website was hand-coded from scratch and with a lot of love. I hope you learn something!

P.S. If you don’t feel like reading, just take a listen to the prerecorded audio of me reading it out, and follow along on a sheet of paper.

## What is binary?

The top definition of binary on Google is:

*relating to, composed of, or involving two things.*

Here are some examples of binary pairs:

- Yes and no
- On and off
- True and false

So now that we know the definition of *the word* binary, what is binary within the context of computers?

Well, binary is a base-two numbering system. In plain English, that means that each digit of a binary number is… well… binary. It can have one of *two* possible values: one or zero. This is opposed to the most common numbering system, decimal, whose digits can have only one of *ten* possible values.

When trying to understand binary, it’s important to discern between numbers and values. 

A number is a representation of a value.

For example, “5” is not a value. It is a number, which represents a value. This value can also be represented by:

- The word “five”
- The number of fingers on one human hand
- The binary number 0101
- etc.

Since there’s no real-world object that *is* 5, humans have come up with standardized systems that can *represent* the value 5.

Binary is an example of such a system.

So how does it work? Let’s try to understand by figuring out how to count.

## How to count

You're probably thinking, 

*"Uhm. I think I know how to count..."*

..And you'd be right.

But how does counting logically work? If we can figure that out, we use those rules to increment a binary number.

Let's start by counting from zero:

0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ?

Obviously, next number is 10, but why is it 10? Well, the reason becomes clearer when we count with numbers formatted like this:

00, 01, 02, 03, 04, 05, 06, 07, 08, 09, **10**

Although this represents the same sequence, we now get an inkling as to how the number system works. 

Firstly, when we are incrementing the number as a whole, we are actually incrementing the rightmost digit. When we increment a digit at its maximum value, we simply increment the digit to the left of it and reset the current digit's value. Keep in mind that we apply the same rules when we increment the digit to the left of the current one.

In this case, the rightmost digit of "09" was at its maximum value, so we reset it to a "0" and incremented the digit to the left of it from "0" to "1", 
resulting in "10".

When incrementing, we treat the number as if there is are infinite zeros to the left of it. These don't change the value of the number, so they are usually omitted in the written representation of the number.

So now that we know the rules behind decimal, let's apply it to binary!

Again, let's start by counting up from zero (but this time, in binary):

0, 1, ?

Our rightmost digit is at its maximum value, so let's increment the digit to the left of it and reset the current digit's value. Remember how we assume there are infinite zeros to the left of the number.

The rightmost "1" becomes "0", and the implicit "0" to the left of it becomes "1", resulting in the binary number "10".

Counting further, we get:

11, 100, 101, 111, etc.

So now that we have the rules for counting in binary, let's try to mathematically represent it.

## Positional number systems

Remember place values?

Place values are the "weighting" of each digit within a number. Using place values and a some arithmetic, you can easily determine the value of a number. If you remember back from second grade, each decimal digit's value is ten times more than the one to the right of it, with the rightmost number having a place value of one, like this:

| Digit       | 3    | 2    | 1    | 2    |
| ----------- | ---- | ---- | ---- | ---- |
| Place Value | 1000 | 100  | 10   | 1    |

You could find the value of the number by summing the digits multiplied by their respective place values. Take the example from above:

| Digit       | 3               | 2             | 1           | 2         |
| ----------- | --------------- | ------------- | ----------- | --------- |
| Place Value | 1000            | 100           | 10          | 1         |
| Real Value  | 3 * 1000 = 3000 | 2 * 100 = 200 | 1 * 10 = 10 | 2 * 1 = 2 |

Which has a value of 3212, which is 3000 + 200 + 10 + 1.

So using that representation, let’s try to figure out a general form of positional numbering systems.

Let’s start by writing the place values like this:

| Digit       | 3              | 2              | 1              | 2              |
| ----------- | -------------- | -------------- | -------------- | -------------- |
| Place Value | 10<sup>3</sup> | 10<sup>2</sup> | 10<sup>1</sup> | 10<sup>0</sup> |

Do you see anything interesting about this representation of place value? 

Decimal is a base *ten* system, which means that all the place values are powers of ten.

Let’s look at a binary number’s place values:

| Digit       | 1             | 0             | 1             | 1             |
| ----------- | ------------- | ------------- | ------------- | ------------- |
| Place Value | 2<sup>3</sup> | 2<sup>2</sup> | 2<sup>1</sup> | 2<sup>0</sup> |

Here’s the common thread: for a base-*n* number system, a digit in position *p* (defined as the number of digits in between it and the rightmost number) will have a place value of n<sup>p</sup>

To calculate the value of any number in any positional numbering system, sum the digits’ values multiplied by their respective place values.

## Bitfield Basics

This is a bitfield! =>

It is an intuitive representation of a binary number, where each checkbox represents a single bit.

If you hover over the bitfield, you'll see the place values for each bit.

To the right of all the checkboxes is the decimal value of the binary number.

While the bitfield above is **eight bits**, bitfields can be of all sizes!

(They get a lot more unwieldy as they get bigger)

## Digit shifting

When you were shifting the bits around in the activity above, did you notice anything interesting about the way the number’s value changed?

You may have noticed that every time you shift the bits left, the value doubles, and every time you shift the bits right, the value halves.

Why is this?

Well, let’s see what this digit shifting operation does to a decimal number.

For example, "13" shifted to the left is "130". This means that a left shift multiplies the number’s value by a factor of ten. Let’s shift "13" to the right. This results in "1", since the rightmost digit is discarded. Therefore, a right shift is equivalent to dividing by ten and rounding down.

When we write this out, a digit shift essentially increments or decrements the place value’s power in each digit.

**Before shift**

| Digit       | 1              | 3              | 0*              |
| ----------- | -------------- | -------------- | --------------- |
| Place Value | 10<sup>1</sup> | 10<sup>0</sup> | 10<sup>-1</sup> |
| Real Value  | 1 * 10 = 10    | 3 * 1 = 3      | 0 * 0.1 = 0     |

*Since "0" has a fractional place value, we omit this from the actual number’s representation.

10 + 3 + 0 = **13**

**After left shift**

| Digit       | 1                | 3                | 0                 |
| ----------- | ---------------- | ---------------- | ----------------- |
| Place Value | 10<sup>1+1</sup> | 10<sup>0+1</sup> | 10<sup>-1+1</sup> |
| Real Value  | 1 * 100 = 100    | 3 * 10 = 30      | 2 * 1 = 0         |

100 + 30 + 0 = **130**

This is an extremely useful property of decimal.

You’ve probably used digit shifting in your daily life to speed up math without even knowing it. When multiplying by a power of ten, it’s easier to just shift the digits left as opposed to multiplying it all out. The same goes for division by a power of ten. We can simply shift the digits right instead. So, if a base *ten* digit shift multiplies or divides a number’s value by a power of *ten*, what would a base *two* bit shift do?

If you guessed that it multiplies or divides by a power of *two*, you’d be right.

You can see this happening in front of your eyes by dragging the bitfield horizontally and observing the value.

## What is it?

The multiply shift is an elegant way to multiply a binary number by a constant fractional value without using floating point math.

## Why hack bits?

In computers, floating-point numbers are a binary format for holding real values using scientific notation. The main gripe with floating point that many computer programmers have is that it is extremely slow to do arithmetic with when compared to integers. Without a dedicated piece of hardware for it, floating point math is often tens of times slower than integer math, which is why I– among many other people– avoid it like the plague.

The multiply shift is over twice as fast compared to just using raw floating point, which makes it a useful tool in computationally constrained environments. Keep in mind that the speed figure was computed on a system that has dedicated hardware for speeding up floating-point math. If my computer didn’t have that, the speedup would’ve been even more drastic.

## How does it work?

The multiply shift works like this:

1. Multiply a number by a constant value
2. Shift it right by a constant value

Conceptually, it’s very simple, but there’s a lot of cool math behind it.

Let’s first turn it into a mathematical expression:

n * (m / 2<sup>s</sup>)

Where *n* is one multiplicand, *m* is the an integer scaling value and *s* is the right shift value.

Essentially, we are multiplying *n* by a fraction with a positive integral numerator and denominator that is a power of two.

This means that the multiply shift is simply an approximation for a fraction.

Once we convert our target number into a fraction, we can determine its multiply shift. For example, let’s try to use this to convert from degrees Celsius to degrees Fahrenheit. The equation is as follows:

(C * 9 / 5) + 32 = F

As you can see, there’s a fraction within the equation. We want our multiply shift approximation to be as close as possible to that. So, let’s set up the equation:

9 / 5 = m / 2<sup>s</sup>

Since we have two variables, we can’t solve for it yet.

I’m going to randomly set *s* to eight. I chose this because shift value determines how many useful bits the result will have. Since we are using 32-bit numbers, shifting right 8 bits will leave us with 24 usable bits (since shifting right discards bits). This introduces a trade-off. As *s* gets higher, the approximation becomes more accurate. However, you have a lesser range of values to work with. When making your own implementations, just use common sense to choose a value for *s*.

m / 2<sup>8</sup> = 9 / 5

~~2<sup>8</sup>~~ * m / ~~2<sup>8</sup>~~ = 2<sup>8</sup> * (9 / 5) 

m = **461**

So that means our multiply shift fraction is now equivalent to:

461 / 256 = 1.80078125

Which is pretty close to 9 / 5 (1.8)

With those numbers calculated, we can now substitute it all in to get the equation:

(C * 461) >> 8 + 32 = F

Where ">>" is the right shift operator.

On my machine, the multiply-shift version is over *three times faster* than the floating-point equation!

The multiply shift is one of many tools that can be used to speed up calculations on a computer. Hopefully, you understood the math and found it beautiful. It’s one of my favorite bit tricks.

Thank you for reading, I hope you had fun!

(I know I did ;D)



