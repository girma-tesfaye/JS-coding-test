//case 1

/* function getProductsForCollection(metafieldValue) {
  // Step 1: Parse Metafield
  const tags = metafieldValue.split('Make_'); // Adjust the splitting logic based on your actual tag format

  // Step 2 & 3: Search for and Filter Products
  let collectionProducts = new Set();
  for (const tag of tags) {
      // Search for products with the current tag
      const productsWithTag = searchProductsByTag(tag);

      // Filter the products for the current tag
      if (collectionProducts.size === 0) {
          collectionProducts = new Set(productsWithTag);
      } else {
          collectionProducts = new Set([...collectionProducts].filter(x => productsWithTag.has(x)));
      }
  }

  return Array.from(collectionProducts);
}
 */
/* function searchProductsByTag(tag) {
  // Implement logic to search for products with the given tag
  // You may need to navigate your hierarchical structure to find matching products
  // This function should return an array or set of product IDs, for example.
} */

// Example Usage:
/* const metafieldValue = "Group_Electric-Pallet-Jack-PartsMake_BT-Prime-Mover";
const productsForCollection = getProductsForCollection(metafieldValue);
console.log(productsForCollection); */




/* function findCombinationsFromText(metafieldValue) {
  // Step 1: Split the input string into individual tags
  const tags = metafieldValue.split(', ');

  // Step 2, 3, and 4: Categorize tags based on their prefixes
  const groups = [];
  const categories = [];
  const subcategories = [];
  const makes = [];
  const models = [];
  const diagrams = [];

  tags.forEach(tag => {
    if (tag.startsWith('Group_')) groups.push(tag);
    else if (tag.startsWith('Category_')) categories.push(tag);
    else if (tag.startsWith('Subcategory_')) subcategories.push(tag);
    else if (tag.startsWith('Make_')) makes.push(tag);
    else if (tag.startsWith('Model_')) models.push(tag);
    else if (tag.startsWith('Diagram_')) diagrams.push(tag);
  });

  // Step 5: Combine the arrays into all possible combinations
  const combinations = [];

  // Loop through each group
  for (const group of groups) {
    // Loop through each category
    for (const category of categories) {
      // Loop through each subcategory
      for (const subcategory of subcategories) {
        // Create a combination with group, category, and subcategory
        combinations.push([group, category, subcategory]);
      }
      // Create a combination with group and category only
      combinations.push([group, category]);
    }
    // Create a combination with group only
    combinations.push([group]);
  }

  return combinations;
}

// Test Case 3
const input = 'Group_Electric-Pallet-Jack-Parts, Category_Switches, Subcategory_Ignition-Switch';
const result = findCombinationsFromText(input);
console.log(result); */

//Case 3
/* function findCombinationsFromText(metafieldValues) {
  const tags = metafieldValues.split(', ');

  const groups = [];
  const categories = [];
  const subcategories = [];
  const makes = [];
  const models = [];
  const diagrams = [];

  tags.forEach(tag => {
    if (tag.startsWith('Group_')) groups.push(tag);
    else if (tag.startsWith('Category_')) categories.push(tag);
    else if (tag.startsWith('Subcategory_')) subcategories.push(tag);
    else if (tag.startsWith('Make_')) makes.push(tag);
    else if (tag.startsWith('Model_')) models.push(tag);
    else if (tag.startsWith('Diagram_')) diagrams.push(tag);
  });

  const combinationOfTags = [];

  for (const group of groups) {
    for (const category of categories) {
      for (const subcategory of subcategories) {
        combinationOfTags.push([group, category, subcategory]);
      }
      combinationOfTags.push([group, category]);
    }
    combinationOfTags.push([group]);
  }

  return combinationOfTags;
}

const input = 'Group_Electric-Pallet-Jack-Parts, Category_Switches, Subcategory_Ignition-Switch';
const outPut = findCombinationsFromText(input);
console.log(outPut); */


//Case 4
/* function findCombinationsFromText(metafieldValues) {
    const validTags = [];
    let currentTag = '';
  
    for (let i = 0; i < metafieldValues.length; i++) {
      const char = metafieldValues[i];
  
      if (char === '-' && metafieldValues[i + 1] === '-') {
        i++;
      } else if (char === ',' || i === metafieldValues.length - 1) {
        if (currentTag) {
          validTags.push(currentTag);
          currentTag = '';
        }
      } else {
        currentTag += char;
      }
    }
  
    const groups = [];
    const categories = [];
    const subcategories = [];
  
    validTags.forEach(tag => {
      if (tag.startsWith('Group_')) groups.push(tag);
      else if (tag.startsWith('Category_')) categories.push(tag);
      else if (tag.startsWith('Subcategory_')) subcategories.push(tag);
    });
  
    const combinationOfTags = [];
  
    for (const group of groups) {
      for (const category of categories) {
        for (const subcategory of subcategories) {
          combinationOfTags.push([group, category, subcategory]);
        }
        combinationOfTags.push([group, category]);
      }
      combinationOfTags.push([group]);
    }
  
    return combinationOfTags;
  }
  
  const input = '--Group_Electric-Pallet-Jack-Parts, Category_Switche@%s-!! Subcategory_Ignition-Switch))@!%';
  const output = findCombinationsFromText(input);
  console.log(output); */
  



//Case 5
/* function findCombinationsFromText(metafieldValue) {
    const validTags = [];
    let currentTag = '';
  
    for (let i = 0; i < metafieldValue.length; i++) {
      const char = metafieldValue[i];
  
      if (char === '-' && metafieldValue[i + 1] === '-') {
        i++;
      } else if (char === '-' && currentTag.startsWith('Group_')) {
        validTags.push(currentTag);
        currentTag = 'Group_';
      } else if (char === '-' || i === metafieldValue.length - 1) {
        if (currentTag) {
          validTags.push(currentTag);
          currentTag = '';
        }
      } else {
        currentTag += char;
      }
    }
  
    const groups = [];
    const categories = [];
    const subcategories = [];
  
    validTags.forEach(tag => {
      if (tag.startsWith('Group_')) groups.push(tag);
      else if (tag.startsWith('Category_')) categories.push(tag);
      else if (tag.startsWith('Subcategory_')) subcategories.push(tag);
    });
  
    const combinations = [];
  
    for (const group of groups) {
      for (const category of categories) {
        for (const subcategory of subcategories) {
          combinations.push([group, category, subcategory]);
        }
        combinations.push([group, category]);
      }
      combinations.push([group]);
    }
  
    return combinations;
  }
  
  const input = 'Category_Switches-Group_Electric-Pallet-Jack-Parts-Subcategory_Ignition-Switch';
  const output = findCombinationsFromText(input);
  console.log(output); */
  


//Case 7
/* function findCombinationsFromText(inputText) {
    const tags = inputText.split('-');
  
    const tagTypes = new Set();
    for (const tag of tags) {
      const tagType = tag.split('_')[0];
      if (tagTypes.has(tagType)) {
        return [];
      }
      tagTypes.add(tagType);
    }
  
    const combinations = [];
    let currentCombination = '';
    for (const tag of tags) {
      if (currentCombination !== '') {
        currentCombination += '-';
      }
      currentCombination += tag;
      combinations.push(currentCombination);
    }
  
    return combinations;
  }
  
  const inputText = 'Group_Tools-Hardware-Category_Roll-Pin-Make_Atlas-Group_Test';
  const output = findCombinationsFromText(inputText);
  console.log(output); */
  


//Case 8
/* function isValidPrefix(prefix) {
    const validPrefixes = ['Group', 'Category', 'Subcategory', 'Make', 'Model', 'Diagram'];
    return validPrefixes.includes(prefix);
  }
  
  function findCombinationsFromText(inputText) {
    const tags = inputText.split('-');
  
    const tagTypes = new Set();
    for (const tag of tags) {
      const [tagType, _] = tag.split('_'); 
      if (!isValidPrefix(tagType)) {
        return [];
      }
      if (tagTypes.has(tagType)) {
        return [];
      }
      tagTypes.add(tagType);
    }
  
    const combinations = [];
    let currentCombination = '';
    for (const tag of tags) {
      if (currentCombination !== '') {
        currentCombination += '-';
      }
      currentCombination += tag;
      combinations.push(currentCombination);
    }
  
    return combinations;
  }
  
  const inputText = 'Group_Tools-Hardware-Category_Roll-Pin-Make_Atlas-WrongPrefix_Test';
  const output = findCombinationsFromText(inputText);
  console.log(output);
   */