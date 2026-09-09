export type CardCategory =
  | "Notation conventions"
  | "Complex numbers"
  | "Vector spaces"
  | "Dirac notation"
  | "Operators"
  | "Measurement & states";

export type Flashcard = {
  id: string;
  term: string;
  definition: string;
  extra?: string;
  category: CardCategory;
};

export type Deck = {
  id: string;
  title: string;
  subtitle: string;
  cards: Flashcard[];
};

export const quantumCh1Terms: Deck = {
  id: "quantum-ch1-terms",
  title: "Quantum CH 1 Terms",
  subtitle:
    "Math review for quantum mechanics: notation conventions, complex numbers, Hilbert spaces, Dirac notation, operators, and the first measurement postulates.",
  cards: [
    {
      id: "subset-inclusion",
      category: "Notation conventions",
      term: "Inclusion $\\subset$",
      definition:
        "The inclusion symbol $\\subset$ does not exclude equality: $A \\subset A$ is true. Many textbooks use $\\subset$ the same way others use $\\subseteq$.",
    },
    {
      id: "proper-inclusion",
      category: "Notation conventions",
      term: "Proper inclusion $\\subsetneq$",
      definition:
        "Write $A \\subsetneq B$ when the inclusion is proper: $A$ is contained in $B$ and $A \\neq B$.",
    },
    {
      id: "implies",
      category: "Notation conventions",
      term: "Implication $\\implies$",
      definition:
        "$P \\implies Q$ means $P$ implies $Q$: if $P$ is true, then $Q$ is true.",
    },
    {
      id: "logical-and",
      category: "Notation conventions",
      term: "And $\\wedge$",
      definition:
        "$P \\wedge Q$ is the conjunction of $P$ and $Q$: both statements are true.",
    },
    {
      id: "logical-or",
      category: "Notation conventions",
      term: "Or $\\vee$",
      definition:
        "$P \\vee Q$ is the disjunction of $P$ and $Q$: at least one of the statements is true.",
    },
    {
      id: "iff",
      category: "Notation conventions",
      term: "If and only if $\\iff$",
      definition:
        "$P \\iff Q$ means $P$ if and only if $Q$: each implies the other, so they are equivalent.",
    },
    {
      id: "forall",
      category: "Notation conventions",
      term: "For all $\\forall$",
      definition:
        "$\\forall$ is the universal quantifier: $\\forall x \\in S,\\, P(x)$ means $P(x)$ holds for every $x$ in $S$.",
    },
    {
      id: "exists",
      category: "Notation conventions",
      term: "Exists $\\exists$",
      definition:
        "$\\exists$ is the existential quantifier: $\\exists x \\in S$ such that $P(x)$ means there is at least one $x$ in $S$ for which $P(x)$ is true.",
    },
    {
      id: "such-that",
      category: "Notation conventions",
      term: "Such that $|$ or $:$",
      definition:
        "In set-builder notation, $|$ or $:$ is read “such that.” Example: $\\{x \\in \\mathbb{R} : x > 0\\}$ is the set of $x$ in $\\mathbb{R}$ such that $x > 0$.",
    },
    {
      id: "element-of",
      category: "Notation conventions",
      term: "Element of $\\in$",
      definition:
        "$x \\in A$ means $x$ is an element of the set $A$. Example: $x \\in \\mathbb{R}$ says $x$ is a real number.",
    },
    {
      id: "intersection",
      category: "Notation conventions",
      term: "Intersection $\\cap$",
      definition:
        "$A \\cap B$ is the set of elements that belong to both $A$ and $B$.",
      extra: "Example: $[0,2] \\cap (-\\infty, 1) = [0,1)$.",
    },
    {
      id: "union",
      category: "Notation conventions",
      term: "Union $\\cup$",
      definition:
        "$A \\cup B$ is the set of elements that belong to $A$ or $B$ (or both).",
      extra: "Example: $[0,2] \\cup (1,3) = [0,3]$.",
    },
    {
      id: "set-difference",
      category: "Notation conventions",
      term: "Set difference $\\setminus$",
      definition:
        "$A \\setminus B$ is the set of elements that are in $A$ but not in $B$.",
      extra: "Example: $\\{0,1,2,3\\} \\setminus \\{1,3,4\\} = \\{0,2\\}$.",
    },
    {
      id: "integers",
      category: "Notation conventions",
      term: "Integers $\\mathbb{Z}$",
      definition:
        "$\\mathbb{Z} = \\{\\dots, -2, -1, 0, 1, 2, \\dots\\}$ is the set of all integers.",
    },
    {
      id: "rationals",
      category: "Notation conventions",
      term: "Rationals $\\mathbb{Q}$",
      definition:
        "$\\mathbb{Q}$ is the set of rational numbers: fractions $p/q$ with $p \\in \\mathbb{Z}$ and $q \\in \\mathbb{Z}$, $q \\neq 0$.",
    },
    {
      id: "reals",
      category: "Notation conventions",
      term: "Reals $\\mathbb{R}$",
      definition:
        "$\\mathbb{R}$ is the set of real numbers: all points on the number line, including irrationals such as $\\sqrt{2}$ and $\\pi$.",
    },
    {
      id: "complex-set",
      category: "Notation conventions",
      term: "Complex numbers $\\mathbb{C}$",
      definition:
        "$\\mathbb{C}$ is the set of complex numbers $z = x + iy$ with $x,y \\in \\mathbb{R}$.",
    },
    {
      id: "number-set-chain",
      category: "Notation conventions",
      term: "$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R} \\subset \\mathbb{C}$",
      definition:
        "The standard number sets nest: naturals sit inside the integers, then rationals, reals, and complex numbers. In these notes $\\subset$ allows equality of a set with itself, but this chain is a proper inclusion at each step.",
    },
    {
      id: "natural-numbers",
      category: "Notation conventions",
      term: "Natural numbers $\\mathbb{N}$",
      definition:
        "In these notes, zero is a natural number: $\\mathbb{N} = \\{0, 1, 2, \\dots\\}$. Textbooks differ on this, so it is fixed once and for all here.",
    },
    {
      id: "n-zero",
      category: "Notation conventions",
      term: "$\\mathbb{N}_0$",
      definition:
        "$\\mathbb{N}_0$ is synonymous with $\\mathbb{N}$ in these notes. The subscript $0$ only emphasizes that zero is included.",
    },
    {
      id: "asterisk-removes-zero",
      category: "Notation conventions",
      term: "Asterisk $^*$ (on a number set)",
      definition:
        "A superscript asterisk removes the zero element from a set of numbers. If $S$ is a number set, $S^* = S \\setminus \\{0\\}$.",
    },
    {
      id: "n-star",
      category: "Notation conventions",
      term: "Positive integers $\\mathbb{N}^*$",
      definition:
        "$\\mathbb{N}^* = \\mathbb{N} \\setminus \\{0\\} = \\{1, 2, \\dots\\}$. These are the positive integers (naturals without zero).",
    },
    {
      id: "r-star",
      category: "Notation conventions",
      term: "Nonzero reals $\\mathbb{R}^*$",
      definition:
        "$\\mathbb{R}^* = \\mathbb{R} \\setminus \\{0\\}$: all real numbers except zero.",
    },
    {
      id: "superscript-plus",
      category: "Notation conventions",
      term: "Superscript $+$",
      definition:
        "A superscript $+$ selects the strictly positive elements of a number set. Example: $\\mathbb{R}^+ = \\{x \\in \\mathbb{R} : x > 0\\}$.",
    },
    {
      id: "r-plus",
      category: "Notation conventions",
      term: "Positive reals $\\mathbb{R}^+$",
      definition:
        "$\\mathbb{R}^+ = \\{x \\in \\mathbb{R} : x > 0\\}$. Zero is not included.",
    },
    {
      id: "r-plus-zero",
      category: "Notation conventions",
      term: "Nonnegative reals $\\mathbb{R}_0^+$",
      definition:
        "A further subscript $0$ adjoins zero to the positive elements: $\\mathbb{R}_0^+ = \\mathbb{R}^+ \\cup \\{0\\} = \\{x \\in \\mathbb{R} : x \\ge 0\\}$.",
    },
    {
      id: "complex-number",
      category: "Complex numbers",
      term: "Complex number",
      definition:
        "A number $z = x + iy$ with real part $x$, imaginary part $y$, and $i^2 = -1$. In polar form, $z = re^{i\\theta}$ with modulus $r$ and argument $\\theta$.",
    },
    {
      id: "complex-conjugate",
      category: "Complex numbers",
      term: "Complex conjugate",
      definition:
        "If $z = x + iy$, the conjugate is $z^* = x - iy$. Conjugation flips the sign of the imaginary part (and of the phase: $(re^{i\\theta})^* = re^{-i\\theta}$).",
      extra: "Useful identities: $(zw)^* = z^*w^*$, $|z|^2 = z z^*$.",
    },
    {
      id: "modulus",
      category: "Complex numbers",
      term: "Modulus (magnitude)",
      definition:
        "$|z| = \\sqrt{z z^*} = \\sqrt{x^2 + y^2}$. It is real and nonnegative. $|z| = 0$ if and only if $z = 0$.",
    },
    {
      id: "euler-formula",
      category: "Complex numbers",
      term: "Euler's formula",
      definition:
        "$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$. This converts between Cartesian and polar form and is the backbone of phases in quantum amplitudes.",
      extra: "Special cases: $e^{i\\pi} = -1$, $e^{i\\pi/2} = i$.",
    },
    {
      id: "polar-form",
      category: "Complex numbers",
      term: "Polar form",
      definition:
        "$z = |z|e^{i\\arg(z)}$. Multiplication multiplies moduli and adds arguments: $z_1 z_2 = |z_1||z_2|e^{i(\\theta_1+\\theta_2)}$.",
    },
    {
      id: "linear-vector-space",
      category: "Vector spaces",
      term: "Linear vector space",
      definition:
        "A set of vectors closed under addition and multiplication by scalars (here, complex numbers). If $|\\psi\\rangle$ and $|\\phi\\rangle$ are in the space, so is $\\alpha|\\psi\\rangle + \\beta|\\phi\\rangle$.",
    },
    {
      id: "linear-combination",
      category: "Vector spaces",
      term: "Linear combination",
      definition:
        "A sum $\\sum_n c_n |\\psi_n\\rangle$ with complex coefficients $c_n$. Superpositions of quantum states are linear combinations of state vectors.",
    },
    {
      id: "linear-independence",
      category: "Vector spaces",
      term: "Linear independence",
      definition:
        "Vectors $\\{|v_i\\rangle\\}$ are linearly independent if $\\sum_i c_i |v_i\\rangle = 0$ implies every $c_i = 0$. No one of them is a combination of the others.",
    },
    {
      id: "span",
      category: "Vector spaces",
      term: "Span",
      definition:
        "The span of a set of vectors is the set of all linear combinations of those vectors. A spanning set can generate every vector in the space.",
    },
    {
      id: "basis",
      category: "Vector spaces",
      term: "Basis",
      definition:
        "A linearly independent spanning set. Every vector has a unique expansion $|\\psi\\rangle = \\sum_n c_n |n\\rangle$ in a given basis $\\{|n\\rangle\\}$.",
    },
    {
      id: "dimension",
      category: "Vector spaces",
      term: "Dimension",
      definition:
        "The number of vectors in a basis. Finite-dimensional examples: a spin-$1/2$ Hilbert space has dimension $2$. Wavefunctions live in infinite-dimensional spaces.",
    },
    {
      id: "hilbert-space",
      category: "Vector spaces",
      term: "Hilbert space",
      definition:
        "A complex inner-product space that is complete (every Cauchy sequence converges). Quantum states are (rays of) vectors in a Hilbert space $\\mathcal{H}$.",
    },
    {
      id: "inner-product",
      category: "Vector spaces",
      term: "Inner product",
      definition:
        "A map $\\langle\\phi|\\psi\\rangle$ that is linear in the ket, antilinear in the bra, satisfies $\\langle\\phi|\\psi\\rangle = \\langle\\psi|\\phi\\rangle^*$, and $\\langle\\psi|\\psi\\rangle \\ge 0$ with equality only for $|\\psi\\rangle = 0$.",
      extra:
        "For wavefunctions: $\\langle\\phi|\\psi\\rangle = \\int \\phi^*(x)\\,\\psi(x)\\,dx$.",
    },
    {
      id: "norm",
      category: "Vector spaces",
      term: "Norm",
      definition:
        "$\\|\\psi\\| = \\sqrt{\\langle\\psi|\\psi\\rangle}$. Physical state vectors are usually normalized so that $\\|\\psi\\| = 1$.",
    },
    {
      id: "orthogonal",
      category: "Vector spaces",
      term: "Orthogonal",
      definition:
        "Two vectors are orthogonal if $\\langle\\phi|\\psi\\rangle = 0$. Orthogonal states can be distinguished with certainty by a suitable measurement.",
    },
    {
      id: "orthonormal-basis",
      category: "Vector spaces",
      term: "Orthonormal basis",
      definition:
        "A basis satisfying $\\langle m|n\\rangle = \\delta_{mn}$. Coefficients in this basis are inner products: $c_n = \\langle n|\\psi\\rangle$.",
    },
    {
      id: "kronecker-delta",
      category: "Vector spaces",
      term: "Kronecker delta",
      definition:
        "$\\delta_{mn} = 1$ if $m = n$ and $0$ otherwise. It is the matrix of the identity in an orthonormal basis: $\\langle m|\\mathbb{I}|n\\rangle = \\delta_{mn}$.",
    },
    {
      id: "completeness",
      category: "Vector spaces",
      term: "Completeness (closure) relation",
      definition:
        "For an orthonormal basis $\\{|n\\rangle\\}$, $\\sum_n |n\\rangle\\langle n| = \\mathbb{I}$. Inserting this identity is the standard trick for changing bases or expanding operators.",
    },
    {
      id: "dirac-notation",
      category: "Dirac notation",
      term: "Dirac (bra-ket) notation",
      definition:
        "Compact notation for vectors and inner products: kets $|\\psi\\rangle$ are column vectors, bras $\\langle\\phi|$ are row vectors (duals), and $\\langle\\phi|\\psi\\rangle$ is the inner product (“bracket”).",
    },
    {
      id: "ket",
      category: "Dirac notation",
      term: "Ket",
      definition:
        "$|\\psi\\rangle$ denotes a vector in Hilbert space — the quantum state (up to a global phase). In a basis it is a column of amplitudes.",
    },
    {
      id: "bra",
      category: "Dirac notation",
      term: "Bra",
      definition:
        "$\\langle\\psi|$ is the dual of $|\\psi\\rangle$: the conjugate-transpose (adjoint) of the ket. Acting on a ket produces a complex number.",
    },
    {
      id: "bracket",
      category: "Dirac notation",
      term: "Bracket",
      definition:
        "$\\langle\\phi|\\psi\\rangle$ is the inner product of $|\\phi\\rangle$ and $|\\psi\\rangle$. $|\\langle\\phi|\\psi\\rangle|^2$ is the Born probability of finding $|\\psi\\rangle$ in $|\\phi\\rangle$ (for normalized states).",
    },
    {
      id: "outer-product",
      category: "Dirac notation",
      term: "Outer product",
      definition:
        "$|\\phi\\rangle\\langle\\psi|$ is an operator: it maps $|\\chi\\rangle \\mapsto \\langle\\psi|\\chi\\rangle\\,|\\phi\\rangle$. Rank-one operators and projectors are built this way.",
    },
    {
      id: "basis-expansion",
      category: "Dirac notation",
      term: "Basis expansion",
      definition:
        "$|\\psi\\rangle = \\sum_n |n\\rangle\\langle n|\\psi\\rangle = \\sum_n c_n |n\\rangle$ with $c_n = \\langle n|\\psi\\rangle$. The numbers $c_n$ are the representation of the state in that basis.",
    },
    {
      id: "wavefunction",
      category: "Dirac notation",
      term: "Wave function",
      definition:
        "The position-space representative of a ket: $\\psi(x) = \\langle x|\\psi\\rangle$. $|\\psi(x)|^2$ is the probability density for finding the particle at $x$.",
    },
    {
      id: "linear-operator",
      category: "Operators",
      term: "Linear operator",
      definition:
        "A map $\\hat{A}$ on $\\mathcal{H}$ with $\\hat{A}(\\alpha|\\psi\\rangle + \\beta|\\phi\\rangle) = \\alpha\\hat{A}|\\psi\\rangle + \\beta\\hat{A}|\\phi\\rangle$. Observables and time evolution are represented by linear operators.",
    },
    {
      id: "matrix-element",
      category: "Operators",
      term: "Matrix element",
      definition:
        "$A_{mn} = \\langle m|\\hat{A}|n\\rangle$. These numbers are the matrix of $\\hat{A}$ in the chosen basis. Acting on a column of coefficients is ordinary matrix multiplication.",
    },
    {
      id: "identity-operator",
      category: "Operators",
      term: "Identity operator",
      definition:
        "$\\mathbb{I}|\\psi\\rangle = |\\psi\\rangle$ for every $|\\psi\\rangle$. In an orthonormal basis, $\\mathbb{I} = \\sum_n |n\\rangle\\langle n|$.",
    },
    {
      id: "adjoint",
      category: "Operators",
      term: "Adjoint (Hermitian conjugate)",
      definition:
        "The adjoint $\\hat{A}^\\dagger$ is defined by $\\langle\\phi|\\hat{A}\\psi\\rangle = \\langle \\hat{A}^\\dagger\\phi|\\psi\\rangle$. In matrix language, $A^\\dagger = (A^T)^*$ (conjugate transpose).",
      extra: "$(AB)^\\dagger = B^\\dagger A^\\dagger$, $(cA)^\\dagger = c^* A^\\dagger$.",
    },
    {
      id: "hermitian",
      category: "Operators",
      term: "Hermitian (self-adjoint) operator",
      definition:
        "An operator with $\\hat{A}^\\dagger = \\hat{A}$. Observables are Hermitian. Eigenvalues are real, and eigenvectors for distinct eigenvalues are orthogonal.",
    },
    {
      id: "unitary",
      category: "Operators",
      term: "Unitary operator",
      definition:
        "An operator with $\\hat{U}^\\dagger \\hat{U} = \\hat{U}\\hat{U}^\\dagger = \\mathbb{I}$, so $\\hat{U}^{-1} = \\hat{U}^\\dagger$. Unitaries preserve inner products (and thus probabilities). Time evolution $e^{-i\\hat{H}t/\\hbar}$ is unitary.",
    },
    {
      id: "projector",
      category: "Operators",
      term: "Projection operator",
      definition:
        "A Hermitian operator with $\\hat{P}^2 = \\hat{P}$. The projector onto a normalized state is $\\hat{P}_\\psi = |\\psi\\rangle\\langle\\psi|$. Onto a subspace: $\\sum_k |k\\rangle\\langle k|$ over an orthonormal basis of that subspace.",
    },
    {
      id: "eigenvalue",
      category: "Operators",
      term: "Eigenvalue and eigenvector",
      definition:
        "$\\hat{A}|a\\rangle = a|a\\rangle$. The number $a$ is the eigenvalue; $|a\\rangle$ is the corresponding eigenvector (eigenstate). For an observable, possible measurement outcomes are the eigenvalues.",
    },
    {
      id: "degeneracy",
      category: "Operators",
      term: "Degeneracy",
      definition:
        "An eigenvalue is degenerate if two or more linearly independent eigenvectors share it. The degenerate subspace can be given any orthonormal basis; extra labels (other commuting observables) distinguish the states.",
    },
    {
      id: "spectral-theorem",
      category: "Operators",
      term: "Spectral decomposition",
      definition:
        "A Hermitian operator can be written $\\hat{A} = \\sum_n a_n |n\\rangle\\langle n|$ in an orthonormal eigenbasis (with a sum/integral in the continuous case). Functions of $\\hat{A}$ act as $f(\\hat{A}) = \\sum_n f(a_n)|n\\rangle\\langle n|$.",
    },
    {
      id: "commutator",
      category: "Operators",
      term: "Commutator",
      definition:
        "$[\\hat{A},\\hat{B}] = \\hat{A}\\hat{B} - \\hat{B}\\hat{A}$. If $[\\hat{A},\\hat{B}] = 0$, the operators commute and can share a common eigenbasis (when they are Hermitian and the space is well behaved).",
    },
    {
      id: "anticommutator",
      category: "Operators",
      term: "Anticommutator",
      definition:
        "$\\{\\hat{A},\\hat{B}\\} = \\hat{A}\\hat{B} + \\hat{B}\\hat{A}$. Appears for fermions and in some uncertainty identities.",
    },
    {
      id: "compatible",
      category: "Operators",
      term: "Compatible observables",
      definition:
        "Hermitian operators that commute. They can be measured simultaneously: there is a common eigenbasis, so a state can have definite values of both observables.",
    },
    {
      id: "trace",
      category: "Operators",
      term: "Trace",
      definition:
        "$\\mathrm{Tr}(\\hat{A}) = \\sum_n \\langle n|\\hat{A}|n\\rangle$, independent of orthonormal basis. Cyclic: $\\mathrm{Tr}(ABC) = \\mathrm{Tr}(CAB)$. For a pure state, $\\langle\\hat{A}\\rangle = \\mathrm{Tr}(|\\psi\\rangle\\langle\\psi|\\hat{A})$.",
    },
    {
      id: "state-vector",
      category: "Measurement & states",
      term: "State vector",
      definition:
        "A normalized ket $|\\psi\\rangle$ (or a ray: $e^{i\\alpha}|\\psi\\rangle$ is the same physical state) that encodes all predictions for measurements on the system.",
    },
    {
      id: "normalization",
      category: "Measurement & states",
      term: "Normalization",
      definition:
        "$\\langle\\psi|\\psi\\rangle = 1$, or for a wave function $\\int |\\psi(x)|^2\\,dx = 1$. This makes Born-rule probabilities add to one.",
    },
    {
      id: "superposition",
      category: "Measurement & states",
      term: "Superposition principle",
      definition:
        "If $|\\psi\\rangle$ and $|\\phi\\rangle$ are allowed states, so is any normalized linear combination $\\alpha|\\psi\\rangle + \\beta|\\phi\\rangle$. Quantum amplitudes add; probabilities do not (interference).",
    },
    {
      id: "born-rule",
      category: "Measurement & states",
      term: "Born rule",
      definition:
        "If $|\\psi\\rangle$ is expanded in the orthonormal eigenbasis of an observable, the probability of outcome $a_n$ is $P(a_n) = |\\langle n|\\psi\\rangle|^2$. After the measurement the state collapses to $|n\\rangle$ (nondegenerate case).",
    },
    {
      id: "probability-amplitude",
      category: "Measurement & states",
      term: "Probability amplitude",
      definition:
        "The complex number $\\langle\\phi|\\psi\\rangle$ (or $\\psi(x) = \\langle x|\\psi\\rangle$). The measurable probability is the modulus squared of the amplitude.",
    },
    {
      id: "probability-density",
      category: "Measurement & states",
      term: "Probability density",
      definition:
        "In position space, $\\rho(x) = |\\psi(x)|^2$. The probability of finding the particle in $[a,b]$ is $\\int_a^b |\\psi(x)|^2\\,dx$.",
    },
    {
      id: "observable",
      category: "Measurement & states",
      term: "Observable",
      definition:
        "A measurable physical quantity, represented by a Hermitian operator. Possible results are the operator's eigenvalues; the state determines the probability of each result.",
    },
    {
      id: "expectation-value",
      category: "Measurement & states",
      term: "Expectation value",
      definition:
        "$\\langle\\hat{A}\\rangle = \\langle\\psi|\\hat{A}|\\psi\\rangle = \\sum_n a_n |c_n|^2$. This is the mean of many measurements of $\\hat{A}$ on identically prepared copies of $|\\psi\\rangle$.",
    },
    {
      id: "uncertainty",
      category: "Measurement & states",
      term: "Uncertainty (standard deviation)",
      definition:
        "$\\Delta A = \\sqrt{\\langle\\hat{A}^2\\rangle - \\langle\\hat{A}\\rangle^2}$. The Robertson relation is $\\Delta A\\,\\Delta B \\ge \\tfrac{1}{2}|\\langle[\\hat{A},\\hat{B}]\\rangle|$.",
    },
    {
      id: "position-operator",
      category: "Measurement & states",
      term: "Position operator",
      definition:
        "In the position representation, $\\hat{x}\\,\\psi(x) = x\\,\\psi(x)$. Eigenstates $|x\\rangle$ are delta-normalized: $\\langle x|x'\\rangle = \\delta(x-x')$.",
    },
    {
      id: "momentum-operator",
      category: "Measurement & states",
      term: "Momentum operator",
      definition:
        "In the position representation, $\\hat{p} = -i\\hbar\\frac{\\partial}{\\partial x}$. Plane waves $e^{ipx/\\hbar}$ are momentum eigenfunctions.",
    },
    {
      id: "canonical-commutation",
      category: "Measurement & states",
      term: "Canonical commutation relation",
      definition:
        "$[\\hat{x},\\hat{p}] = i\\hbar$. This is the algebraic origin of the Heisenberg uncertainty principle $\\Delta x\\,\\Delta p \\ge \\hbar/2$.",
    },
    {
      id: "hamiltonian",
      category: "Measurement & states",
      term: "Hamiltonian",
      definition:
        "The energy operator $\\hat{H}$. For a particle, $\\hat{H} = \\frac{\\hat{p}^2}{2m} + V(\\hat{x})$. Its eigenvalues are allowed energies; it generates time evolution.",
    },
    {
      id: "tdse",
      category: "Measurement & states",
      term: "Time-dependent Schrödinger equation",
      definition:
        "$i\\hbar\\frac{\\partial}{\\partial t}|\\psi(t)\\rangle = \\hat{H}|\\psi(t)\\rangle$. This is the equation of motion for the state vector when $\\hat{H}$ is the Hamiltonian.",
    },
    {
      id: "tise",
      category: "Measurement & states",
      term: "Time-independent Schrödinger equation",
      definition:
        "$\\hat{H}|n\\rangle = E_n|n\\rangle$. Energy eigenstates (stationary states) solve this eigenvalue problem.",
    },
    {
      id: "stationary-state",
      category: "Measurement & states",
      term: "Stationary state",
      definition:
        "An energy eigenstate. If $|\\psi(0)\\rangle = |n\\rangle$, then $|\\psi(t)\\rangle = e^{-i E_n t/\\hbar}|n\\rangle$. All probabilities $|\langle\\phi|\\psi(t)\\rangle|^2$ are independent of time, and $\\rho(x)$ does not move.",
    },
    {
      id: "global-phase",
      category: "Measurement & states",
      term: "Global phase",
      definition:
        "$|\\psi\\rangle$ and $e^{i\\alpha}|\\psi\\rangle$ represent the same physical state: every Born probability is unchanged. Relative phases between components of a superposition are physical (they cause interference).",
    },
    {
      id: "heisenberg-up",
      category: "Measurement & states",
      term: "Heisenberg uncertainty principle",
      definition:
        "You cannot prepare a state with arbitrarily sharp values of two incompatible observables. The standard case is $\\Delta x\\,\\Delta p \\ge \\hbar/2$, from $[\\hat{x},\\hat{p}] = i\\hbar$.",
    },
  ],
};

export const decks: Deck[] = [quantumCh1Terms];

export function getDeck(id: string): Deck | undefined {
  return decks.find((d) => d.id === id);
}
