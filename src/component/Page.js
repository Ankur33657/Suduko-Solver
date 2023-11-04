import React from 'react';
import {Link } from 'react-router-dom';
import '../App.css'
const Page = () => {
  const [m00,setM00]=React.useState("0");
  const [m01,setM01]=React.useState("0");
  const [m02,setM02]=React.useState("0");
  const [m03,setM03]=React.useState("0");
  const [m04,setM04]=React.useState("0");
  const [m05,setM05]=React.useState("0");
  const [m06,setM06]=React.useState("0");
  const [m07,setM07]=React.useState("0");
  const [m08,setM08]=React.useState("0");
  //
  const [m10,setM10]=React.useState("0");
  const [m11,setM11]=React.useState("0");
  const [m12,setM12]=React.useState("0");
  const [m13,setM13]=React.useState("0");
  const [m14,setM14]=React.useState("0");
  const [m15,setM15]=React.useState("0");
  const [m16,setM16]=React.useState("0");
  const [m17,setM17]=React.useState("0");
  const [m18,setM18]=React.useState("0");
  //
  const [m20,setM20]=React.useState("0");
  const [m21,setM21]=React.useState("0");
  const [m22,setM22]=React.useState("0");
  const [m23,setM23]=React.useState("0");
  const [m24,setM24]=React.useState("0");
  const [m25,setM25]=React.useState("0");
  const [m26,setM26]=React.useState("0");
  const [m27,setM27]=React.useState("0");
  const [m28,setM28]=React.useState("0");
  //

  const [m30,setM30]=React.useState("0");
  const [m31,setM31]=React.useState("0");
  const [m32,setM32]=React.useState("0");
  const [m33,setM33]=React.useState("0");
  const [m34,setM34]=React.useState("0");
  const [m35,setM35]=React.useState("0");
  const [m36,setM36]=React.useState("0");
  const [m37,setM37]=React.useState("0");
  const [m38,setM38]=React.useState("0");

  //
  const [m40,setM40]=React.useState("0");
  const [m41,setM41]=React.useState("0");
  const [m42,setM42]=React.useState("0");
  const [m43,setM43]=React.useState("0");
  const [m44,setM44]=React.useState("0");
  const [m45,setM45]=React.useState("0");
  const [m46,setM46]=React.useState("0");
  const [m47,setM47]=React.useState("0");
  const [m48,setM48]=React.useState("0");

  //

  const [m50,setM50]=React.useState("0");
  const [m51,setM51]=React.useState("0");
  const [m52,setM52]=React.useState("0");
  const [m53,setM53]=React.useState("0");
  const [m54,setM54]=React.useState("0");
  const [m55,setM55]=React.useState("0");
  const [m56,setM56]=React.useState("0");
  const [m57,setM57]=React.useState("0");
  const [m58,setM58]=React.useState("0");

  const [m60,setM60]=React.useState("0");
  const [m61,setM61]=React.useState("0");
  const [m62,setM62]=React.useState("0");
  const [m63,setM63]=React.useState("0");
  const [m64,setM64]=React.useState("0");
  const [m65,setM65]=React.useState("0");
  const [m66,setM66]=React.useState("0");
  const [m67,setM67]=React.useState("0");
  const [m68,setM68]=React.useState("0");

  //
  const [m70,setM70]=React.useState("0");
  const [m71,setM71]=React.useState("0");
  const [m72,setM72]=React.useState("0");
  const [m73,setM73]=React.useState("0");
  const [m74,setM74]=React.useState("0");
  const [m75,setM75]=React.useState("0");
  const [m76,setM76]=React.useState("0");
  const [m77,setM77]=React.useState("0");
  const [m78,setM78]=React.useState("0");

  //
  const [m80,setM80]=React.useState("0");
  const [m81,setM81]=React.useState("0");
  const [m82,setM82]=React.useState("0");
  const [m83,setM83]=React.useState("0");
  const [m84,setM84]=React.useState("0");
  const [m85,setM85]=React.useState("0");
  const [m86,setM86]=React.useState("0");
  const [m87,setM87]=React.useState("0");
  const [m88,setM88]=React.useState("0");

  

  const grid =[
    [m00,m01,m02,m03,m04,m05,m06,m07,m08],
    [m10,m11,m12,m13,m14,m15,m16,m17,m18],
    [m20,m21,m22,m23,m24,m25,m26,m27,m28],
    [m30,m31,m32,m33,m34,m35,m36,m37,m38],
    [m40,m41,m42,m43,m44,m45,m46,m47,m48],
    [m50,m51,m52,m53,m54,m55,m56,m57,m58],
    [m60,m61,m62,m63,m64,m65,m66,m67,m68],
    [m70,m71,m72,m73,m74,m75,m76,m77,m78],
    [m80,m81,m82,m83,m84,m85,m86,m87,m88]
   

  ]
  // const [grid, setGrid] = useState(predefinedGrid);
  const magic =()=>{

    const result = grid;
    console.log(result);
    

    let N = 9; 
function solveSudoku(grid, row, col)
{
	if (row == N - 1 && col == N)
		return true;

	if (col == N)
	{
		row++;
		col = 0;
	}
	if (grid[row][col] != 0)
		return solveSudoku(grid, row, col + 1);

	for(let num = 1; num < 10; num++)
	{
		if (isSafe(grid, row, col, num))
		{
			
			grid[row][col] = num;

			if (solveSudoku(grid, row, col + 1))
				return true;
		}
		
		grid[row][col] = 0;
	}
	return false;
}




function isSafe(grid, row, col, num)
{
	
	
	for(let x = 0; x <= 8; x++)
		if (grid[row][x] == num)
			return false;


	for(let x = 0; x <= 8; x++)
		if (grid[x][col] == num)
			return false;

	
	let startRow = row - row % 3, 
		startCol = col - col % 3;
		
	for(let i = 0; i < 3; i++)
		for(let j = 0; j < 3; j++)
			if (grid[i + startRow][j + startCol] == num)
				return false;

	return true;
}

// Driver Code
// let grid = [ [ 3, 0, 6, 5, 0, 8, 4, 0, 0 ],
// 			[ 5, 2, 0, 0, 0, 0, 0, 0, 0 ],
// 			[ 0, 8, 7, 0, 0, 0, 0, 3, 1 ],
// 			[ 0, 0, 3, 0, 1, 0, 0, 8, 0 ],
// 			[ 9, 0, 0, 8, 6, 3, 0, 0, 5 ],
// 			[ 0, 5, 0, 0, 9, 0, 6, 0, 0 ],
// 			[ 1, 3, 0, 0, 0, 0, 2, 5, 0 ],
// 			[ 0, 0, 0, 0, 0, 0, 0, 7, 4 ],
// 			[ 0, 0, 5, 2, 0, 6, 3, 0, 0 ] ]

if (solveSudoku(grid, 0, 0)){
  console.log("Successfull");
  console.log(grid);

}
else
	console.log("no solution exists ");

// This code is contributed by rag2127



}


 
    return(
  <>

  <div class='main-box'>
 
<div class="white"><input class="cell" type="text"
 value={m00}  onChange={(e)=>{setM00(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
 value={m01}  onChange={(e)=>{setM01(e.target.value)}}/></div>
<div class="white bdright"><input class="cell" type="text"
 value={m02}  onChange={(e)=>{setM02(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
 value={m03}  onChange={(e)=>{setM03(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
 value={m04}  onChange={(e)=>{setM04(e.target.value)}}/></div>
<div class="black bdright"><input class="cell b1" type="text"
 value={m05}  onChange={(e)=>{setM05(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
 value={m06}  onChange={(e)=>{setM06(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
 value={m07}  onChange={(e)=>{setM07(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
 value={m08}  onChange={(e)=>{setM08(e.target.value)}}/></div>

<div class="black"><input class="cell b1" type="text"
value={m10}  onChange={(e)=>{setM10(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
value={m11}  onChange={(e)=>{setM11(e.target.value)}}/></div>
<div class="black bdright"><input class="cell b1" type="text"
value={m12}  onChange={(e)=>{setM12(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
value={m13}  onChange={(e)=>{setM13(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
value={m14}  onChange={(e)=>{setM14(e.target.value)}}/></div>
<div class="white bdright"><input class="cell" type="text"
value={m15}  onChange={(e)=>{setM15(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
value={m16}  onChange={(e)=>{setM16(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
value={m17}  onChange={(e)=>{setM17(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
value={m18}  onChange={(e)=>{setM18(e.target.value)}}/></div>

<div class="white"><input class="cell" type="text"
 value={m20}  onChange={(e)=>{setM20(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
 value={m21}  onChange={(e)=>{setM21(e.target.value)}}/></div>
<div class="white bdright"><input class="cell" type="text"
 value={m22}  onChange={(e)=>{setM22(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
 value={m23}  onChange={(e)=>{setM23(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
 value={m24}  onChange={(e)=>{setM24(e.target.value)}}/></div>
<div class="black bdright"><input class="cell b1" type="text"
 value={m25}  onChange={(e)=>{setM25(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
 value={m26}  onChange={(e)=>{setM26(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
 value={m27}  onChange={(e)=>{setM27(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
 value={m28}  onChange={(e)=>{setM28(e.target.value)}}/></div>

<div class="black"><input class="cell b1" type="text"
value={m30}  onChange={(e)=>{setM30(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
value={m31}  onChange={(e)=>{setM31(e.target.value)}}/></div>
<div class="black bdright"><input class="cell b1" type="text"
value={m32}  onChange={(e)=>{setM32(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
value={m33}  onChange={(e)=>{setM33(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
value={m34}  onChange={(e)=>{setM34(e.target.value)}}/></div>
<div class="white bdright"><input class="cell" type="text"
value={m35}  onChange={(e)=>{setM35(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
value={m36}  onChange={(e)=>{setM36(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
value={m37}  onChange={(e)=>{setM37(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
value={m38}  onChange={(e)=>{setM38(e.target.value)}}/></div>

<div class="white"><input class="cell" type="text"
 value={m40}  onChange={(e)=>{setM40(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
 value={m41}  onChange={(e)=>{setM41(e.target.value)}}/></div>
<div class="white bdright"><input class="cell" type="text"
 value={m42}  onChange={(e)=>{setM42(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
 value={m43}  onChange={(e)=>{setM43(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
 value={m44}  onChange={(e)=>{setM44(e.target.value)}}/></div>
<div class="black bdright"><input class="cell b1" type="text"
 value={m45}  onChange={(e)=>{setM45(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
 value={m46}  onChange={(e)=>{setM46(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
 value={m47}  onChange={(e)=>{setM47(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
 value={m48}  onChange={(e)=>{setM48(e.target.value)}}/></div>

<div class="black"><input class="cell b1" type="text"
value={m50}  onChange={(e)=>{setM50(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
value={m51}  onChange={(e)=>{setM51(e.target.value)}}/></div>
<div class="black bdright"><input class="cell b1" type="text"
value={m52}  onChange={(e)=>{setM52(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
value={m53}  onChange={(e)=>{setM53(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
value={m54}  onChange={(e)=>{setM54(e.target.value)}}/></div>
<div class="white bdright"><input class="cell" type="text"
value={m55}  onChange={(e)=>{setM55(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
value={m56}  onChange={(e)=>{setM56(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
value={m57}  onChange={(e)=>{setM57(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
value={m18}  onChange={(e)=>{setM58(e.target.value)}}/></div>

<div class="white"><input class="cell" type="text"
 value={m60}  onChange={(e)=>{setM60(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
 value={m61}  onChange={(e)=>{setM61(e.target.value)}}/></div>
<div class="white bdright"><input class="cell" type="text"
 value={m62}  onChange={(e)=>{setM62(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
 value={m63}  onChange={(e)=>{setM63(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
 value={m64}  onChange={(e)=>{setM64(e.target.value)}}/></div>
<div class="black bdright"><input class="cell b1" type="text"
 value={m65}  onChange={(e)=>{setM65(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
 value={m66}  onChange={(e)=>{setM66(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
 value={m67}  onChange={(e)=>{setM67(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
 value={m68}  onChange={(e)=>{setM68(e.target.value)}}/></div>

<div class="black"><input class="cell b1" type="text"
value={m70}  onChange={(e)=>{setM70(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
value={m71}  onChange={(e)=>{setM71(e.target.value)}}/></div>
<div class="black bdright"><input class="cell b1" type="text"
value={m72}  onChange={(e)=>{setM72(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
value={m73}  onChange={(e)=>{setM73(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
value={m74}  onChange={(e)=>{setM74(e.target.value)}}/></div>
<div class="white bdright"><input class="cell" type="text"
value={m75}  onChange={(e)=>{setM75(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
value={m76}  onChange={(e)=>{setM76(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
value={m77}  onChange={(e)=>{setM77(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
value={m78}  onChange={(e)=>{setM78(e.target.value)}}/></div>

<div class="white"><input class="cell" type="text"
 value={m80}  onChange={(e)=>{setM80(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
 value={m61}  onChange={(e)=>{setM81(e.target.value)}}/></div>
<div class="white bdright"><input class="cell" type="text"
 value={m82}  onChange={(e)=>{setM82(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
 value={m83}  onChange={(e)=>{setM83(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
 value={m84}  onChange={(e)=>{setM84(e.target.value)}}/></div>
<div class="black bdright"><input class="cell b1" type="text"
 value={m85}  onChange={(e)=>{setM85(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
 value={m86}  onChange={(e)=>{setM86(e.target.value)}}/></div>
<div class="black"><input class="cell b1" type="text"
 value={m87}  onChange={(e)=>{setM87(e.target.value)}}/></div>
<div class="white"><input class="cell" type="text"
 value={m88}  onChange={(e)=>{setM88(e.target.value)}}/></div>

<button onClick={magic}>Submit</button>

   </div>

  </>
    )
}
export default Page;