  module.exports = (template, product) => {

    let productOutput = template.replace(/{%PRODUCTENAME%}/g, product.productName);

    productOutput = productOutput.replace(/{%IMAGE%}/g, product.image);
    productOutput = productOutput.replace(/{%PRICE%}/g, product.price)
    productOutput = productOutput.replace(/{%FROM%}/g, product.from)
    productOutput = productOutput.replace(/{%NUTRIENTS%}/g, product.nutrients)
    productOutput = productOutput.replace(/{%QUANTITY%}/g, product.quantity)
    productOutput = productOutput.replace(/{%DESCRIPTION%}/g, product.description)
    productOutput = productOutput.replace(/{%ID%}/g, product.id)

    if (!product.organic) {
      productOutput = productOutput.replace(/{%NOT_ORGANIC%}/g, 'not-organic')
    }
    
    return productOutput;
  }