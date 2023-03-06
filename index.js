// Numbers and arithmetic.

const N0 = f => x => x // 0 := f.x.x

const N1 = f => x => f(x) // 1 := f.x.f x

const N2 = f => x => f(f(x)) // 2 := f.x.f (f x)

const N3 = f => x => f(f(f(x))) // 3 := f.x.f (f (f x))

const N4 = f => x => f(f(f(f(x)))) // 4 := f.x.f (f (f (f x)))

const N5 = f => x => f(f(f(f(f(x))))) // 5 := f.x.f (f (f (f (f x))))

const N6 = f => x => f(f(f(f(f(f(x)))))) // 6 := f.x.f (f (f (f (f (f x)))))

const N7 = f => x => f(f(f(f(f(f(f(x))))))) // 7 := f.x.f (f (f (f (f (f (f x))))))

const N8 = f => x => f(f(f(f(f(f(f(f(x)))))))) // 8 := f.x.f (f (f (f (f (f (f (f x)))))))

const N9 = f => x => f(f(f(f(f(f(f(f(f(x))))))))) // 9 := f.x.f (f (f (f (f (f (f (f (f x))))))))

const SUCC = n => f => x => f(n(f)(x)) // SUCC := n.f.x.f (n f x)

const PLUS = m => n => f => x => m(f)(n(f)(x)) // PLUS := m.n.f.x.m f (n f x)

const MULT = m => n => f => m(n(f)) // MULT := m.n.f.m (n f)

const POW = b => e => e(b) // POW := b.e.e b

const PRED = n => f => x => ((n(g => h => h(g(f))))(u => x))(u => u) // PRED := n.f.x.n (g.h.h (g f)) (u.x) (u.u)

const SUB = m => n => (n(PRED))(m) // SUB := m.n.n PRED m

// Numbers and arithmetic.

const N0 = f => x => x // 0 := f.x.x

const N1 = f => x => f(x) // 1 := f.x.f x

const N2 = f => x => f(f(x)) // 2 := f.x.f (f x)

const N3 = f => x => f(f(f(x))) // 3 := f.x.f (f (f x))

const N4 = f => x => f(f(f(f(x)))) // 4 := f.x.f (f (f (f x)))

const N5 = f => x => f(f(f(f(f(x))))) // 5 := f.x.f (f (f (f (f x))))

const N6 = f => x => f(f(f(f(f(f(x)))))) // 6 := f.x.f (f (f (f (f (f x)))))

const N7 = f => x => f(f(f(f(f(f(f(x))))))) // 7 := f.x.f (f (f (f (f (f (f x))))))

const N8 = f => x => f(f(f(f(f(f(f(f(x)))))))) // 8 := f.x.f (f (f (f (f (f (f (f x)))))))

const N9 = f => x => f(f(f(f(f(f(f(f(f(x))))))))) // 9 := f.x.f (f (f (f (f (f (f (f (f x))))))))

const SUCC = n => f => x => f(n(f)(x)) // SUCC := n.f.x.f (n f x)

const PLUS = m => n => f => x => m(f)(n(f)(x)) // PLUS := m.n.f.x.m f (n f x)

const MULT = m => n => f => m(n(f)) // MULT := m.n.f.m (n f)

const POW = b => e => e(b) // POW := b.e.e b

const PRED = n => f => x => ((n(g => h => h(g(f))))(u => x))(u => u) // PRED := n.f.x.n (g.h.h (g f)) (u.x) (u.u)

const SUB = m => n => (n(PRED))(m) // SUB := m.n.n PRED m

// Logic and predicates.

const TRUE = x => y => x // TRUE := x.y.x

const FALSE = x => y => y // FALSE := x.y.y

const AND = p => q => (p(q))(p) // AND := p.q.p q p

const OR = p => q => (p(p))(q) // OR := p.q.p p q

const NOT = p => (p(FALSE))(TRUE) // NOT := p.p FALSE TRUE

const IF_THEN_ELSE = p => a => b => (p(a))(b) // IF_THEN_ELSE := p.a.b.p a b

const IS_ZERO = n => (n(x => FALSE))(TRUE) // IS_ZERO := n.n (x.FALSE) TRUE

const LESS_THAN_OR_EQUAL = m => n => IS_ZERO((SUB(m))(n)) // LESS_THAN_OR_EQUAL := m.n.IS_ZERO (SUB m n)

// Pairs.

const PAIR = x => y => f => (f(x))(y) // PAIR := x.y.f.f x y

const FIRST = p => p(TRUE) // FIRST := p.p TRUE

const SECOND = p => p(FALSE) // SECOND := p.p FALSE
