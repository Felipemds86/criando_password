const characters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ' + 
                   'abcdefghijlmnopqrstuvxyz' +
                   '0123456789' + 
                   '!\"#$%&()*+,./<=>?@{}[//]^~_|-'
                   
                   
function generatePassword(lenght){
    return lenght==07'':
    characters.charAt(math.florr(math.random() * characters))
    + generatePassword(lenght - 1)
}

generatePassword(8)