// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.

/*
Sure, you can create a function in Python to find the index of the first vowel in a given string. Here's one way to do it:

python
Copy code
def find_first_vowel_index(input_string):
    vowels = "aeiouAEIOU"
    for index, char in enumerate(input_string):
        if char in vowels:
            return index
    return -1  # Return -1 if no vowel is found in the input string

# Example usage:
input_string = input("Enter a string: ")
first_vowel_index = find_first_vowel_index(input_string)

if first_vowel_index != -1:
    print(f"The index of the first vowel in the input string is: {first_vowel_index}")
else:
    print("No vowel found in the input string.")
In this function, enumerate(input_string) is used to iterate through the characters of the input string along with their indices. If the current character is a vowel (i.e., it is present in the vowels string), the function immediately returns the index. If no vowel is found in the entire string, the function returns -1.
*/

// Critique the code output.
/*
 Things to consider in your critique: 
 1. Were you surprised by the output? 
    - Um, yes, I thought there would be more output, more than one example.
 2. Was the output what you expected? 
    - Not really, seems pretty bare to me. I was excepting something more robust.
 3. Is the correct output being rendered? 
    - From what I can cipher, yes, it looks like the code is iterating through a string a finding the 1st index of the first vowel and if there is no vowels a string will render stating that fact.
 4. What do you like about the code? 
    - I appreciate the example is regards to completeness.
 5. What do you dislike? 
    - The AI only renders one programming language; I would like to have seen more. -> Maybe Python is the most popular language in regards to this particular question, in regards to the algorithm that the AI is running? -> Would like to see more the example in a variety of programming languages.
 6. Are there best practices that are not being followed?
    - Hm, maybe where the reference came from in regards to the answer. Ex. "Created by AI"
 7. Would you take a different approach? 
    - Yes, I would be more specific in my query.
 8. What did you learn? 
    - Use AI as a tool, not as the "final source". Do you own critical thinking. And, be as specific as you can while researching answers; or while trying to find solutions through research.
 */
