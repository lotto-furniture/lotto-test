const getRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min

/**
 * 微信手气红包(拆红包)
 * 要求：
 * 1. 单个红包的金额最低 0.01 元，最小单位为分
 * 2. 所有单个红包的金额总和必须等于发出的总金额
 * 3. 以 Number 数组形式返回每个红包的金额，保留两位小数
 */
export function distributeRedPackets(
  /** 总金额/元 */
  totalAmount: number,
  /** 总人数 */
  totalPeople: number
): number[] {
  // TODO：待实现
  return []
}

