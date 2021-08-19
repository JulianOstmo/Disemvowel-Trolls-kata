Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

# Pomodoro 1
✅ guards:
  ✅ input is not a string throw error
  ✅ input is an empty string
✅ WHEN input is "LOL"
  ✅ THEN expect "LL" to be returned
✅ WHEN input is "lol"
  ✅ THEN expect "ll" to be returned
✅ WHEN input is "losers LOL"
  ✅ THEN expect "lsrs LL"
✅ WHEN input is "This website is for losers LOL!"
 ✅ THEN expect "Ths wbst s fr lsrs LL!"

# Tech Debt
✅ only replacing capital "O"
