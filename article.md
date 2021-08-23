## Bit Hacks!

This is a primer on binary, numbering systems, and how we can leverage the properties of the binary numbering system to do some really cool math to make our computers run faster!

This entire website was hand-coded from scratch and with a lot of love. I hope you learn something!

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

If you hover over the bitfield, you'll see the decimal value of each bit.

To the right of all the checkboxes is the decimal value of the binary number.

While the bitfield above is **eight bits**, bitfields can be of all sizes!

(They get a lot more unwieldy as they get bigger)