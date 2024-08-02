// binary to decimal
//14 - 1*10 + 4*10  = 10 + 4 = 14
//115 - 1*100 + 1*10 + 5*1  = 100 + 10 + 5 = 115
//1101 - 1*1000 = 1*1000 + 0*10 + 1*1 = 1000 + 100 + 0 + 1 = 1000
//3546 - 3*1000 + 5*100 + 4*10 + 6*1 = 3000 + 500 + 40 + 1 = 3546

// 1101 -> 1*2^3 + 1*2^2 + 0*2^1 + 1*2^0 = 1*8 + 1*4 + 0*2 + 1*1 = 8 + 4 + 0 + 1 = 13
// 0111 - > 0*8 + 1*4 + 1*2 + 1*1 = 0 + 4 + 2 + 1 = 7

// 8 bits - 1 byte

// for a 4 bit number , what is max value in decimal form u can represent 
//// 1111 -> 15 , range : 0 to 15 ( 16 numbers)-> 2^4 = 16 diff numbers
// for 8 bits : 
// 11111111 - > 1*2^7 + 1*2^6 + 1*2^6 + 1*2^5 + 1*2^4 + 1*2^3 + 1*2^2 + 1*2^1 + 1*2^0
// 128+64+32+16+8+4+2+1=255
// unsigned number formula : 0 to 2^n-1

// 0000 -> 0
//0001 = 1
//0010=2
//0011=3
//1000=4

// two's compliment 
//-1 : 0001 -> 1110 + 0001 -> 1111
//-2 : 0010 -> 1101 + 0001 -> 1110
//-15: 1111 -> 0000 + 0001 -> 0001
// 2's compliment system range formula for n-bit number :[ -2^(n-1), 2^(n-1)-1]
// signed 4 bit :[ -8,7]
// unsigned 8 -bit : [ ]

// reserving left most for sign and rest are range



