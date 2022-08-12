
var maxProfit = function (prices) {

  let maxProfit = 0;
  let lowest = prices[0];
  for (let i = 1; i < prices.length; i++) {

    lowest = Math.min(lowest, prices[i]);

    maxProfit = Math.max(maxProfit, prices[i] - lowest);


  }
  return maxProfit;
};


const prices = [7, 1, 5, 3, 6, 4];



console.log(maxProfit(prices));