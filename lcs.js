timeMeasure = (startFunctionTime) => (Date.now() - startFunctionTime);


// longest common subsuquence
lcs_brute_force = (str1, str2) => {
    for(let i=str1.length-1; i>0; i--) {

        for (let j=0; j <= str1.length - i; j++) {
        	let tmp_str = str1.substr(j, i);
        	
            if (str2.includes(tmp_str)) {
                return {i, str: tmp_str};
            }
            
        }
    }

}

let start = Date.now(), 
dna1 = `cccccatagcatcggcgctatccttttccatcttatcacagtacgcaacacccgtgaacg
acgcagcgcggccctggagtatactttgcagcaaacaaaatgtgatcacggacattgtac
atcaatggctgctatatcttggggctaggccacgtctcccgccgccacggatccctaata
tagtaaggtgttgcttgttaaataaatctcgcttcgtgtagttcaccgcacggggctctg
taccggtgcccgaatctaagttattacgagtttaataggaacttgactcgtcgacaccca
tgggcagcgagccacgggcaccttccacgcgattatcttacacaaaaacccgtgggaagg
tagttacctcctttccttagaggattagaatatcaaggagagggtatcgcttgaatcggt
agagtacgtgttaacgctacttggggggcctagcatccctcacgctttaaataagatcta
cggtcccgaacgtgattttgctagaatgatacttgctaggtagagatgctacagcgccta
gttagtatttcaagagcagattggactacggacttgtgcccgctagcagggtactgggca
tgggatctgctcgttggagttgtagtccattaattcagttattcattaggcacgcgtagc
actaagaagccgtcgcgagaatagggacgacctcggacggtcgaccagactactacgggt
cccacagaaggagtgcaactccccttaacttatccgtccactatgttttgctcatcgtct
aagccaaaaatctacattaggtcagatgtgagcgagacatggtccaatgtgtatccaggt
gtaatagcatcgatctactcatagggactgccagggattttcagtaggttgactcgtcac
ggaggcagtcgttgacgcggtgtttctatttaaggacggagccattttactggggccatc
ggggatgtcgatgctttatgcggggggcaggccgtcaatc`,

dna2 = `agattatctaatcccgtgctttggtatctgttgcatgtcgctcttcggtatacgacaact
ataacaatccgtaggaactacatctatttagggaagttcctcaaaagcagcggagtgcgt
tacagaagcgggacggggtgttctaagttgccaaagactgaacttcctaaacgagtgaca
gtgtctaaccttagaggttgcggacgtcagtgagtgacacgcggtaagatcgccctcagc
acagtgacgacctattggtattcgaagccgatgcagcctttgagcgggatctcgtatgca
agaagtggtcatactaggcgatcgcaatttcgcgggtgaccatctgcggaggctatcttc
gtagggtgtggaaaaacgagttgcacctatattctggctatatgtcacctggcattaccg
gtctagatgcggaacttctacaacatttcaccgcgcgcgtgacatctaaattcagacgtt
catcaatggctcgtaacatcactcctaagataactcccatgaacatctgccagtccggat
tcaatgtcttgtagccattgcaccgcactgacctaaaggatactggaggcgggacttcca
agtaactctacttaatcggctatgcgttccgtagcgtagacgacaaacgattgtcatttt
tacttagaatctacgatcatactttcactacgtagtcttattagcaaccacctacaggta
caattacgtccactatatttaaaggtgggagaaacggtatactcaaaaccctgctcacgg
tagttgagctaaccgtgcaatacaatcggaaacaggtgccgatcgcagacctttggccgt
ggtgaccactttgtggtacaaatcgaattgctctctaaaatcaccgtgtgatacgtgcgt
acggccgggccgaagtatgggaacgcccgaagtttacgcgattgctcatatgagcgcttc
agtctggacctccaccctggcggtgaactccgtgtgcctg`;
console.log(lcs_brute_force(dna1, dna2));
console.log(`lcs bruteforse max to min: ${timeMeasure(start)} miliseconds`)
