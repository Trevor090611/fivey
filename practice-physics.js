// Original AP Physics 1 practice questions, written for Fivey in the style of the AP exam.
// Each unit mixes concept questions, comparisons, experiment design, graph questions,
// and calculation questions whose wrong answers come from common mistakes.
// Questions are multiple choice with the correct answer listed first; the practice page shuffles the choices.

// Hand-written questions: [family, prompt, correct, wrong, wrong, wrong, explanation] or a graph object.
const written = [
  // Unit 1: Kinematics
  [
    ['concept', 'At one instant, a car has a velocity of −8 m/s and an acceleration of +2 m/s². Which describes its motion at that instant?', 'It is slowing down.', 'It is speeding up.', 'It is moving at constant speed.', 'It is at rest.', 'Velocity and acceleration point in opposite directions, so the car’s speed is decreasing.'],
    ['concept', 'A ball is thrown straight up. Air resistance is negligible. Which statement is true at its highest point?', 'Its velocity is zero, and its acceleration is 9.8 m/s² downward.', 'Its velocity and acceleration are both zero.', 'Its velocity is zero, and its acceleration is 9.8 m/s² upward.', 'Its velocity is 9.8 m/s downward, and its acceleration is zero.', 'Gravity keeps acting at the top, so the acceleration is still g downward even though the velocity is momentarily zero.'],
    ['compare', 'From the same height, ball X is dropped from rest while ball Y is launched horizontally at 6 m/s. Air resistance is negligible. Which ball reaches the level ground first?', 'They land at the same time.', 'Ball X lands first.', 'Ball Y lands first.', 'It depends on the masses of the balls.', 'Both start with zero vertical velocity and have the same vertical acceleration, so their fall times are equal.'],
    ['compare', 'Two projectiles are launched from level ground at the same speed, one at 30° and one at 60° above the horizontal. Air resistance is negligible. How do their horizontal ranges compare?', 'The ranges are equal.', 'The 60° projectile travels farther.', 'The 30° projectile travels farther.', 'The 60° projectile travels twice as far.', 'Range depends on sin 2θ, and sin 60° = sin 120°, so complementary angles give equal ranges.'],
    ['concept', 'On a position–time graph, the curve for an object becomes steeper with a positive slope as time passes. What does this show?', 'The object is speeding up in the positive direction.', 'The object is slowing down in the positive direction.', 'The object is moving at constant velocity.', 'The object is moving in the negative direction.', 'The slope of a position–time graph is velocity; a growing positive slope means increasing positive velocity.'],
    ['concept', 'What does the area under an acceleration–time graph represent?', 'The change in velocity', 'The displacement', 'The change in acceleration', 'The average speed', 'Area = acceleration × time, which equals the change in velocity.'],
    ['concept', 'A passenger walks toward the front of a train at 1.5 m/s relative to the train. The train moves forward at 20 m/s relative to the ground. What is the passenger’s velocity relative to the ground?', '21.5 m/s forward', '18.5 m/s forward', '20 m/s forward', '1.5 m/s forward', 'Velocities add: 20 m/s + 1.5 m/s = 21.5 m/s in the forward direction.'],
    ['experiment', 'Students drop a ball from several heights h and measure the fall time t with a photogate. Which graph should be linear, and what does its slope give?', 'h versus t²; the slope is g/2.', 'h versus t; the slope is g.', 'h versus t²; the slope is 2g.', 't versus h; the slope is g.', 'For a drop from rest, h = ½gt², so h versus t² is a straight line through the origin with slope g/2.'],
    ['concept', 'A projectile moves through the air with negligible air resistance. Which quantity stays constant during its flight?', 'The horizontal component of its velocity', 'The vertical component of its velocity', 'Its speed', 'Its height above the ground', 'With no horizontal force, the horizontal velocity does not change; only the vertical velocity changes due to gravity.'],
    ['concept', 'A runner completes one full 400 m lap of a track in 80 s and finishes where she started. Which statement is correct?', 'Her average velocity is zero, and her average speed is 5.0 m/s.', 'Her average velocity and average speed are both 5.0 m/s.', 'Her average velocity is 5.0 m/s, and her average speed is zero.', 'Her average velocity and average speed are both zero.', 'Her displacement is zero, so average velocity is zero; average speed is distance ÷ time = 400 m ÷ 80 s.'],
    { family: 'graph', context: 'The graph shows the velocity of a cart moving along a straight track.', plot: { type: 'line', xLabel: 'Time (s)', yLabel: 'Velocity (m/s)', x: [0, 1, 2, 3, 4, 5, 6], series: [{ name: 'Velocity', values: [0, 3, 6, 9, 9, 9, 9] }] }, prompt: 'What is the cart’s displacement from t = 0 to t = 6 s?', choices: ['40.5 m', '54.0 m', '27.0 m', '13.5 m'], explanation: 'Area under the graph: triangle ½(3 s)(9 m/s) = 13.5 m plus rectangle (3 s)(9 m/s) = 27 m, for 40.5 m.' },
    { family: 'graph', context: 'The graph shows the position of a toy robot along a straight hallway.', plot: { type: 'line', xLabel: 'Time (s)', yLabel: 'Position (m)', x: [0, 1, 2, 3, 4, 5], series: [{ name: 'Position', values: [0, 4, 8, 8, 4, 0] }] }, prompt: 'Which description matches the robot’s motion?', choices: ['It moves at 4 m/s, stops for 1 s, and then returns to its starting point at 4 m/s.', 'It speeds up for 2 s, moves at constant speed for 1 s, and then slows down.', 'It moves at 8 m/s, stops for 1 s, and then moves farther away at 4 m/s.', 'It accelerates at 4 m/s² for the first 2 s.'], explanation: 'Each straight segment has constant slope (velocity): +4 m/s, then 0, then −4 m/s back to x = 0.' }
  ],
  // Unit 2: Force and Translational Dynamics
  [
    ['concept', 'A book is pushed across a table at constant velocity. Which statement about the horizontal forces on the book is correct?', 'The pushing force and the friction force have equal magnitudes.', 'The pushing force is greater than the friction force.', 'The friction force is greater than the pushing force.', 'There is no friction force on the book.', 'Constant velocity means zero acceleration, so the net force is zero and the horizontal forces balance.'],
    ['compare', 'A heavy truck collides head-on with a small car. How does the force exerted by the truck on the car compare with the force exerted by the car on the truck?', 'The forces have equal magnitudes.', 'The truck exerts a larger force.', 'The car exerts a larger force.', 'It depends on which vehicle was moving faster.', 'By Newton’s third law, the two objects exert equal and opposite forces on each other.'],
    ['compare', 'A person stands on a scale in an elevator that is moving downward at a constant speed. How does the scale reading compare with the person’s weight?', 'It is equal to the person’s weight.', 'It is greater than the person’s weight.', 'It is less than the person’s weight.', 'It is zero.', 'At constant velocity the acceleration is zero, so the normal force equals the weight.'],
    ['concept', 'An object moves in a circle at constant speed. What is the direction of the net force on it?', 'Toward the center of the circle', 'Away from the center of the circle', 'Tangent to the circle, in the direction of motion', 'There is no net force, because the speed is constant.', 'The velocity changes direction, so the object accelerates toward the center, and the net force points that way.'],
    ['concept', 'A car rounds a flat, unbanked curve at constant speed. Which force provides the centripetal force?', 'Static friction between the tires and the road', 'Kinetic friction between the tires and the road', 'The normal force from the road', 'The car’s weight', 'The tires do not slide sideways, so static friction points toward the center of the curve.'],
    ['concept', 'An astronaut with a mass of 70 kg travels from Earth to the Moon. Which statement is correct?', 'Her mass stays 70 kg, but her weight decreases.', 'Her mass and weight both decrease.', 'Her mass decreases, but her weight stays the same.', 'Her mass and weight both stay the same.', 'Mass is the amount of matter and does not change; weight = mg depends on the local gravitational field.'],
    ['concept', 'Forces of 3.0 N east and 4.0 N north act on an object. What is the magnitude of the net force?', '5.0 N', '7.0 N', '1.0 N', '12 N', 'The forces are perpendicular, so the net force is √(3.0² + 4.0²) = 5.0 N.'],
    ['concept', 'A skydiver falls at terminal velocity. Which statement is correct?', 'The air resistance force equals her weight, and her acceleration is zero.', 'The air resistance force is greater than her weight.', 'Her acceleration is 9.8 m/s² downward.', 'There is no air resistance at terminal velocity.', 'At terminal velocity the forces balance, so the net force and the acceleration are zero.'],
    ['experiment', 'Students apply different constant forces F to a cart of unknown mass and measure its acceleration a. Which graph would let them find the cart’s mass from the slope?', 'a versus F; the mass is 1/slope.', 'a versus F; the mass equals the slope.', 'F versus a²; the mass equals the slope.', 'a versus 1/F; the mass equals the slope.', 'a = F/m, so a versus F is linear with slope 1/m.'],
    ['concept', 'Why do astronauts orbiting Earth in a space station feel weightless?', 'They and the station are both in free fall around Earth.', 'There is no gravity in space.', 'Earth’s gravity is cancelled by the Moon’s gravity.', 'They are too far from Earth for gravity to act on them.', 'Gravity still acts strongly at orbital altitudes; everything falls together, so nothing presses on the astronauts.'],
    { family: 'graph', context: 'Students pulled a cart with different constant net forces and measured its acceleration.', plot: { type: 'line', xLabel: 'Net force (N)', yLabel: 'Acceleration (m/s²)', x: [0, 1, 2, 3, 4], series: [{ name: 'Acceleration', values: [0, 0.5, 1.0, 1.5, 2.0] }] }, prompt: 'What is the mass of the cart?', choices: ['2.0 kg', '0.50 kg', '4.0 kg', '1.0 kg'], explanation: 'The slope is a/F = 0.50 (m/s²)/N, which equals 1/m, so m = 2.0 kg.' },
    { family: 'graph', context: 'The gravitational force on a probe was measured at different distances from a planet’s center, in units of the planet’s radius R.', plot: { type: 'line', xLabel: 'Distance from center (R)', yLabel: 'Gravitational force (N)', x: [1, 2, 3, 4], series: [{ name: 'Force', values: [800, 200, 89, 50] }] }, prompt: 'Which relationship do the data support?', choices: ['F is proportional to 1/r².', 'F is proportional to 1/r.', 'F decreases linearly with r.', 'F is proportional to r².'], explanation: 'Doubling r cuts the force to one-fourth (800 N to 200 N), and tripling it cuts the force to one-ninth.' }
  ],
  // Unit 3: Work, Energy, and Power
  [
    ['concept', 'A ball on a string moves in a horizontal circle at constant speed. How much work does the tension force do during one revolution?', 'Zero, because the tension is always perpendicular to the motion', 'A positive amount equal to the ball’s kinetic energy', 'A negative amount, because the tension points inward', 'It depends on the radius of the circle.', 'Work = Fd cos θ, and θ = 90° at every instant, so the tension does no work.'],
    ['concept', 'A block slides across a rough floor and slows down. What sign is the work done by friction on the block?', 'Negative', 'Positive', 'Zero', 'It depends on the block’s mass.', 'Friction points opposite the displacement, so cos 180° = −1 makes its work negative.'],
    ['compare', 'Two identical balls are thrown from the top of a cliff with the same speed, one straight up and one straight down. Air resistance is negligible. How do their speeds just before hitting the ground compare?', 'They are equal.', 'The ball thrown upward is faster.', 'The ball thrown downward is faster.', 'It depends on how high the cliff is.', 'Both start with the same kinetic and potential energy, so energy conservation gives the same final speed.'],
    ['concept', 'If an object’s speed is doubled, what happens to its kinetic energy?', 'It is multiplied by 4.', 'It is doubled.', 'It stays the same.', 'It is halved.', 'K = ½mv², so doubling v multiplies K by 2² = 4.'],
    ['concept', 'A spring is compressed twice as far as before. How does the elastic potential energy stored in it change?', 'It is multiplied by 4.', 'It is doubled.', 'It is halved.', 'It stays the same.', 'U = ½kx², so doubling x multiplies the energy by 4.'],
    ['compare', 'Two students lift identical boxes to the same shelf. Student A lifts in 2 s, and Student B lifts in 4 s. Which statement is correct?', 'They do the same work, but Student A develops more power.', 'Student A does more work and develops more power.', 'Student B does more work.', 'They develop the same power.', 'Work = mgh is the same; power = work ÷ time is greater for the shorter time.'],
    ['concept', 'Which statement describes a conservative force such as gravity?', 'The work it does on an object depends only on the starting and ending positions.', 'It always does positive work.', 'It cannot change an object’s kinetic energy.', 'The work it does depends on the path taken.', 'For conservative forces, work is path-independent and can be stored as potential energy.'],
    ['concept', 'A cart rolls along a frictionless roller coaster track from rest. Its speed at a given point depends on which quantity?', 'How far that point is below the starting height', 'The shape of the track between the two points', 'The mass of the cart', 'The total length of the track', 'Energy conservation gives v = √(2gΔh), which depends only on the drop in height.'],
    ['concept', 'A block slides down a rough incline. Which statement about energy is correct?', 'The mechanical energy decreases, but the total energy of the block-incline-Earth system is conserved.', 'The mechanical energy of the system is conserved.', 'The total energy of the system decreases.', 'The block’s kinetic energy must decrease.', 'Friction converts mechanical energy into internal (thermal) energy, so total energy stays constant.'],
    ['experiment', 'Students compress a spring by different distances x and measure the launch speed v of a cart. Which graph is linear, and what does its slope give?', 'v versus x; the slope is √(k/m).', 'v versus x²; the slope is k/m.', 'v² versus x; the slope is k.', 'v versus 1/x; the slope is k.', '½kx² = ½mv² gives v = x√(k/m), so v is proportional to x.'],
    { family: 'graph', context: 'The graph shows the force exerted on a crate as it moves along a straight path.', plot: { type: 'line', xLabel: 'Position (m)', yLabel: 'Force (N)', x: [0, 1, 2, 3, 4], series: [{ name: 'Force', values: [0, 10, 20, 20, 20] }] }, prompt: 'How much work does the force do from x = 0 to x = 4 m?', choices: ['60 J', '80 J', '40 J', '20 J'], explanation: 'Work is the area under the F–x graph: ½(2 m)(20 N) + (2 m)(20 N) = 20 J + 40 J = 60 J.' },
    { family: 'graph', context: 'The graph shows the gravitational potential energy and kinetic energy of a falling ball at different heights. Use g = 9.8 m/s².', plot: { type: 'line', xLabel: 'Height (m)', yLabel: 'Energy (J)', x: [0, 1, 2, 3, 4], series: [{ name: 'Potential energy', values: [0, 10, 20, 30, 40] }, { name: 'Kinetic energy', values: [40, 30, 20, 10, 0] }] }, prompt: 'What is the approximate mass of the ball?', choices: ['1.0 kg', '10 kg', '0.10 kg', '4.0 kg'], explanation: 'Potential energy increases by mg ≈ 10 J per meter, so m ≈ 10 ÷ 9.8 ≈ 1.0 kg.' }
  ],
  // Unit 4: Linear Momentum
  [
    ['concept', 'Why do airbags reduce injuries in car crashes?', 'They increase the time over which the person’s momentum changes, which reduces the force.', 'They reduce the person’s change in momentum.', 'They reduce the impulse on the person to zero.', 'They increase the person’s mass.', 'The impulse (change in momentum) is the same, but spreading it over a longer time lowers the average force.'],
    ['concept', 'Which statement is true for every collision in an isolated system?', 'Total momentum is conserved.', 'Total kinetic energy is conserved.', 'The objects stick together.', 'Each object’s momentum is conserved.', 'With no external net force, total momentum is conserved; kinetic energy is conserved only in elastic collisions.'],
    ['compare', 'Two identical balls hit a wall at the same speed. Ball A sticks to the wall, while ball B bounces straight back. Which ball receives the larger impulse from the wall?', 'Ball B', 'Ball A', 'They receive equal impulses.', 'Neither ball receives an impulse.', 'Ball B’s velocity reverses, so its change in momentum (and impulse) is larger.'],
    ['concept', 'A rifle fires a bullet. Why does the rifle recoil with a much smaller speed than the bullet?', 'The rifle and bullet get equal and opposite momenta, and the rifle has much more mass.', 'The rifle receives a smaller force than the bullet.', 'Momentum is not conserved during firing.', 'The rifle receives less impulse than the bullet.', 'Total momentum stays zero, so m_rifle v_rifle = m_bullet v_bullet; a large mass means a small speed.'],
    ['concept', 'An object moving through space explodes into several pieces. No external forces act. What happens to the velocity of the system’s center of mass?', 'It stays the same as before the explosion.', 'It becomes zero.', 'It increases.', 'It points in the direction of the largest piece.', 'Internal forces cannot change the total momentum, so the center of mass keeps moving with the same velocity.'],
    ['compare', 'A compressed spring between a 1 kg cart and a 3 kg cart at rest is released. How do their speeds compare after they separate?', 'The 1 kg cart moves 3 times as fast as the 3 kg cart.', 'Both carts move at the same speed.', 'The 3 kg cart moves 3 times as fast.', 'The 1 kg cart moves 9 times as fast.', 'Total momentum stays zero: (1 kg)v₁ = (3 kg)v₃, so v₁ = 3v₃.'],
    ['concept', 'Which type of collision results in the greatest loss of kinetic energy?', 'A perfectly inelastic collision, in which the objects stick together', 'An elastic collision', 'A collision in which the objects bounce apart', 'All collisions lose the same kinetic energy.', 'When the objects stick together, the most kinetic energy possible (while conserving momentum) is converted to other forms.'],
    ['concept', 'What does the area under a force–time graph represent?', 'The impulse, which equals the change in momentum', 'The work done', 'The change in kinetic energy', 'The power', 'Impulse = ∫F dt, which equals the object’s change in momentum.'],
    ['compare', 'A truck and a bicycle have the same momentum. Which one has more kinetic energy?', 'The bicycle', 'The truck', 'They have the same kinetic energy.', 'There is not enough information to decide.', 'K = p²/(2m); with equal p, the smaller mass has more kinetic energy.'],
    ['experiment', 'Students want to test conservation of momentum in a collision between two carts on a track. Which measurements are needed?', 'The mass of each cart and the velocity of each cart just before and just after the collision', 'Only the speeds of the carts after the collision', 'The length of the track and the collision time', 'The force sensor reading and the cart masses only', 'Momentum is mass × velocity, so they need both masses and the velocities before and after.'],
    { family: 'graph', context: 'The graph shows the force exerted on a ball by a bat during a hit.', plot: { type: 'line', xLabel: 'Time (s)', yLabel: 'Force (N)', x: [0, 0.01, 0.02, 0.03, 0.04], series: [{ name: 'Force', values: [0, 200, 400, 200, 0] }] }, prompt: 'What impulse does the bat deliver to the ball?', choices: ['8.0 N·s', '16 N·s', '4.0 N·s', '400 N·s'], explanation: 'Impulse is the area under the graph: ½(0.04 s)(400 N) = 8.0 N·s.' },
    { family: 'graph', context: 'Two carts collide on a level, frictionless track. The graph shows each cart’s momentum.', plot: { type: 'line', xLabel: 'Time (s)', yLabel: 'Momentum (kg·m/s)', x: [0, 1, 2, 3, 4], series: [{ name: 'Cart A', values: [6, 6, 2, 2, 2] }, { name: 'Cart B', values: [0, 0, 4, 4, 4] }] }, prompt: 'Which conclusion do the data support?', choices: ['The total momentum stays 6 kg·m/s, so momentum is conserved.', 'Cart A loses more momentum than cart B gains.', 'The total momentum decreases during the collision.', 'Cart B exerts a larger force on cart A than cart A exerts on cart B.'], explanation: 'Before: 6 + 0 = 6 kg·m/s; after: 2 + 4 = 6 kg·m/s.' }
  ],
  // Unit 5: Torque and Rotational Dynamics
  [
    ['concept', 'To produce the greatest torque on a door, where and how should a force be applied?', 'At the edge farthest from the hinges, perpendicular to the door', 'Near the hinges, perpendicular to the door', 'At the edge farthest from the hinges, parallel to the door', 'Anywhere, as long as the force is large enough', 'τ = rF sin θ is greatest for the largest r and θ = 90°.'],
    ['concept', 'Which conditions must be met for an extended object to be in static equilibrium?', 'The net force and the net torque on it are both zero.', 'Only the net force on it is zero.', 'Only the net torque on it is zero.', 'Its velocity is constant.', 'Translational and rotational equilibrium both require zero net force and zero net torque.'],
    ['compare', 'A hoop and a solid disk have the same mass and radius. Which has the greater rotational inertia about its central axis?', 'The hoop', 'The disk', 'They are equal.', 'It depends on how fast they spin.', 'All of the hoop’s mass is at the radius R, while much of the disk’s mass is closer to the axis.'],
    ['compare', 'A thin uniform rod can rotate about an axis through its center or an axis through one end, both perpendicular to the rod. About which axis is its rotational inertia smaller?', 'The axis through its center', 'The axis through one end', 'They are equal.', 'It depends on the rod’s mass.', 'I_center = ML²/12, while I_end = ML²/3, because more mass is far from an end axis.'],
    ['concept', 'A merry-go-round rotates at a constant rate. How do the angular and tangential speeds of a child near the edge compare with those of a child near the center?', 'Same angular speed, greater tangential speed', 'Greater angular speed, same tangential speed', 'Same angular and tangential speeds', 'Smaller angular speed, greater tangential speed', 'All points share ω, but v = ωr grows with distance from the axis.'],
    ['concept', 'A wheel spins with zero net torque acting on it. What can be concluded?', 'Its angular velocity is constant.', 'It must be at rest.', 'It is slowing down.', 'Its angular acceleration is increasing.', 'Zero net torque means zero angular acceleration, so ω stays constant (which may or may not be zero).'],
    ['concept', 'Why are door handles placed far from the hinges?', 'A longer lever arm produces more torque for the same force.', 'It reduces the door’s rotational inertia.', 'It increases the door’s mass.', 'It reduces friction in the hinges.', 'Torque = force × lever arm, so a larger distance gives more torque.'],
    ['concept', 'A seesaw is balanced with one child on each side. If the heavier child moves closer to the pivot, what happens?', 'The lighter child’s side rotates downward.', 'The heavier child’s side rotates downward.', 'The seesaw stays balanced.', 'The pivot moves toward the heavier child.', 'The heavier child’s torque decreases, so the lighter child’s torque is now larger.'],
    ['concept', 'A string passes over a pulley that has mass and connects two hanging blocks that accelerate. How do the string tensions on the two sides of the pulley compare?', 'They are different, because a net torque is needed to give the pulley angular acceleration.', 'They are always equal.', 'They are both equal to the weight of the heavier block.', 'They are both zero.', 'If the pulley has rotational inertia, unequal tensions supply the net torque that spins it up.'],
    ['experiment', 'To measure the rotational inertia of a disk, students apply several known torques and measure the resulting angular accelerations. Which graph and slope give the rotational inertia?', 'Torque versus angular acceleration; the slope is I.', 'Angular acceleration versus torque; the slope is I.', 'Torque versus angular velocity; the slope is I.', 'Torque versus time; the slope is I.', 'τ = Iα, so τ versus α is linear with slope I.'],
    { family: 'graph', context: 'The graph shows the angular velocity of a spinning wheel.', plot: { type: 'line', xLabel: 'Time (s)', yLabel: 'Angular velocity (rad/s)', x: [0, 1, 2, 3, 4, 5], series: [{ name: 'Angular velocity', values: [0, 4, 8, 12, 16, 20] }] }, prompt: 'What is the wheel’s angular acceleration?', choices: ['4.0 rad/s²', '20 rad/s²', '0.25 rad/s²', '2.0 rad/s²'], explanation: 'Angular acceleration is the slope: (20 rad/s − 0) ÷ 5 s = 4.0 rad/s².' },
    { family: 'graph', context: 'Students applied different net torques to a disk and measured its angular acceleration.', plot: { type: 'line', xLabel: 'Angular acceleration (rad/s²)', yLabel: 'Net torque (N·m)', x: [0, 2, 4, 6, 8], series: [{ name: 'Torque', values: [0, 0.3, 0.6, 0.9, 1.2] }] }, prompt: 'What is the disk’s rotational inertia?', choices: ['0.15 kg·m²', '6.7 kg·m²', '1.2 kg·m²', '0.30 kg·m²'], explanation: 'The slope of τ versus α is I = 1.2 N·m ÷ 8 rad/s² = 0.15 kg·m².' }
  ],
  // Unit 6: Energy and Momentum of Rotating Systems
  [
    ['concept', 'A spinning figure skater pulls her arms in. Which statement is correct?', 'Her angular speed increases, her angular momentum stays the same, and her rotational kinetic energy increases.', 'Her angular speed and angular momentum both increase.', 'Her angular speed increases, and her rotational kinetic energy stays the same.', 'Her angular speed decreases, and her angular momentum stays the same.', 'L = Iω is conserved; with smaller I, ω increases, and K = L²/(2I) increases because she does work pulling her arms in.'],
    ['compare', 'A solid sphere and a hoop are released from rest at the top of the same incline and roll without slipping. Which reaches the bottom first?', 'The solid sphere', 'The hoop', 'They arrive together.', 'It depends on their masses.', 'The sphere has a smaller fraction of its energy in rotation, so more goes into translational speed.'],
    ['concept', 'A ball rolls without slipping down a ramp. How much work does static friction do on the ball?', 'Zero, because the contact point does not slide', 'A negative amount equal to the lost potential energy', 'A positive amount equal to the rotational kinetic energy', 'It depends on the ramp’s angle.', 'The contact point is momentarily at rest, so static friction does no work and mechanical energy is conserved.'],
    ['concept', 'A satellite moves in an elliptical orbit around a planet. Where is its speed greatest?', 'At the point closest to the planet', 'At the point farthest from the planet', 'Its speed is the same everywhere.', 'Halfway between the closest and farthest points', 'Angular momentum mvr is conserved, so speed is greatest where r is smallest.'],
    ['concept', 'Under what condition is the angular momentum of a system conserved?', 'When the net external torque on the system is zero', 'When the net external force on the system is zero', 'When the system has no kinetic energy', 'When the system rotates at constant angular speed', 'ΔL = τ_net Δt, so L stays constant when the net external torque is zero.'],
    ['concept', 'A wheel rolls without slipping across the ground. What is its total kinetic energy?', 'The sum of its translational and rotational kinetic energies', 'Only its translational kinetic energy', 'Only its rotational kinetic energy', 'The difference between its translational and rotational kinetic energies', 'K_total = ½mv² + ½Iω² for an object that both moves and spins.'],
    ['concept', 'A child jumps onto the edge of a rotating merry-go-round. Which statement is correct?', 'The angular speed decreases, and the total kinetic energy decreases.', 'The angular speed decreases, and the total kinetic energy is conserved.', 'The angular speed increases.', 'The angular momentum decreases.', 'The system’s rotational inertia increases, so ω drops; the collision is inelastic, so kinetic energy is lost.'],
    ['compare', 'Two satellites, one with twice the mass of the other, orbit Earth in circles of the same radius. How do their orbital speeds compare?', 'They are equal.', 'The heavier satellite is faster.', 'The lighter satellite is faster.', 'The heavier satellite is twice as fast.', 'v = √(GM/r) depends on Earth’s mass and the orbit radius, not on the satellite’s mass.'],
    ['concept', 'A satellite moves from a lower circular orbit to a higher circular orbit. What happens to its speed and total mechanical energy?', 'Its speed decreases, and its total energy increases.', 'Its speed increases, and its total energy increases.', 'Its speed decreases, and its total energy decreases.', 'Both stay the same.', 'v = √(GM/r) falls with r, while E = −GMm/(2r) becomes less negative, so energy increases.'],
    ['concept', 'A constant net torque acts on a wheel for a time interval Δt. What does the product τΔt equal?', 'The change in the wheel’s angular momentum', 'The change in the wheel’s rotational kinetic energy', 'The wheel’s angular displacement', 'The work done on the wheel', 'Angular impulse equals the change in angular momentum.'],
    { family: 'graph', context: 'The graph shows the angular momentum of a wheel on which a constant net torque acts.', plot: { type: 'line', xLabel: 'Time (s)', yLabel: 'Angular momentum (kg·m²/s)', x: [0, 1, 2, 3, 4], series: [{ name: 'Angular momentum', values: [2, 5, 8, 11, 14] }] }, prompt: 'What is the net torque on the wheel?', choices: ['3.0 N·m', '14 N·m', '2.0 N·m', '0.33 N·m'], explanation: 'Net torque equals the slope of L versus t: (14 − 2) ÷ 4 = 3.0 N·m.' },
    { family: 'graph', context: 'The graph shows the percentage of total kinetic energy that is rotational for three objects rolling without slipping.', plot: { type: 'bar', xLabel: 'Object', yLabel: 'Rotational share of KE (%)', x: ['Hoop', 'Solid disk', 'Solid sphere'], series: [{ name: 'Rotational share', values: [50, 33, 29] }] }, prompt: 'If all three roll from rest down the same incline, which reaches the bottom first?', choices: ['The solid sphere', 'The hoop', 'The solid disk', 'All arrive together.'], explanation: 'The sphere puts the largest share of its energy into translation, so it has the greatest speed at every height.' }
  ],
  // Unit 7: Oscillations
  [
    ['concept', 'A block on a spring oscillates. If the amplitude is increased, what happens to the period?', 'It stays the same.', 'It increases.', 'It decreases.', 'It doubles.', 'T = 2π√(m/k) does not depend on amplitude.'],
    ['concept', 'A simple pendulum’s bob is replaced with one of twice the mass. What happens to the period for small swings?', 'It stays the same.', 'It doubles.', 'It is halved.', 'It increases by a factor of √2.', 'T = 2π√(L/g) does not depend on mass.'],
    ['concept', 'Where is the speed greatest and the acceleration zero for a block in simple harmonic motion?', 'At the equilibrium position', 'At maximum displacement', 'Halfway between equilibrium and maximum displacement', 'At every point', 'The restoring force is zero at equilibrium, and all of the energy is kinetic there.'],
    ['concept', 'For a mass on a spring at maximum displacement, which statement is correct?', 'The speed is zero, and the acceleration has its greatest magnitude.', 'The speed and acceleration are both at their greatest.', 'The speed is greatest, and the acceleration is zero.', 'The speed and acceleration are both zero.', 'At the turning point the block momentarily stops, and the restoring force kx is largest.'],
    ['compare', 'A pendulum that keeps time on Earth is taken to the Moon. How does its period on the Moon compare?', 'It is longer.', 'It is shorter.', 'It is the same.', 'The pendulum will not swing.', 'T = 2π√(L/g), and g is smaller on the Moon, so the period is longer.'],
    ['concept', 'What condition defines simple harmonic motion?', 'The restoring force is proportional to the displacement and points toward equilibrium.', 'The speed is constant.', 'The acceleration is constant.', 'The restoring force is constant and points toward equilibrium.', 'SHM requires F = −kx: the force is proportional to and opposite the displacement.'],
    ['concept', 'During simple harmonic motion with no friction, what happens to the system’s energy?', 'The total stays constant while energy changes between kinetic and potential.', 'The kinetic energy stays constant.', 'The potential energy stays constant.', 'The total energy decreases each cycle.', 'With no friction, mechanical energy is conserved and shifts between K and U.'],
    ['concept', 'The amplitude of a mass-spring oscillator is doubled. What happens to its total energy and period?', 'The energy is multiplied by 4, and the period is unchanged.', 'The energy and period both double.', 'The energy doubles, and the period is unchanged.', 'The energy is unchanged, and the period doubles.', 'E = ½kA² scales with A², while the period does not depend on amplitude.'],
    ['concept', 'Why is a pendulum swinging through a large angle (such as 60°) not exactly simple harmonic motion?', 'The restoring force is proportional to sin θ, which is not proportional to θ at large angles.', 'Gravity changes during the swing.', 'The mass of the bob changes.', 'The string stretches.', 'The small-angle approximation sin θ ≈ θ fails at large angles.'],
    ['experiment', 'Students measure a pendulum’s period T for several lengths L to determine g. Which graph is linear, and how is g found?', 'T² versus L; g = 4π²/slope.', 'T versus L; g = slope.', 'T² versus L; g = slope.', 'T versus 1/L; g = 4π² × slope.', 'T² = (4π²/g)L, so T² versus L is linear with slope 4π²/g.'],
    { family: 'graph', context: 'The graph shows the displacement of a block oscillating on a spring.', plot: { type: 'line', xLabel: 'Time (s)', yLabel: 'Displacement (cm)', x: [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5, 3.75, 4], series: [{ name: 'Displacement', values: [0, 3.54, 5, 3.54, 0, -3.54, -5, -3.54, 0, 3.54, 5, 3.54, 0, -3.54, -5, -3.54, 0] }] }, prompt: 'What are the period and amplitude of the oscillation?', choices: ['2.0 s and 5 cm', '1.0 s and 5 cm', '2.0 s and 10 cm', '4.0 s and 5 cm'], explanation: 'The motion repeats every 2.0 s, and the greatest displacement from equilibrium is 5 cm.' },
    { family: 'graph', context: 'Students measured the period of a pendulum for several lengths and graphed T² against L.', plot: { type: 'line', xLabel: 'Length (m)', yLabel: 'Period squared (s²)', x: [0.2, 0.4, 0.6, 0.8, 1], series: [{ name: 'T²', values: [0.81, 1.61, 2.42, 3.22, 4.03] }] }, prompt: 'What value of g do the data give?', choices: ['9.8 m/s²', '4.0 m/s²', '0.40 m/s²', '39 m/s²'], explanation: 'The slope is 4.03 s²/m = 4π²/g, so g = 4π² ÷ 4.03 ≈ 9.8 m/s².' }
  ],
  // Unit 8: Fluids
  [
    ['concept', 'Three containers of different shapes are filled with water to the same depth. How do the pressures at the bottoms compare?', 'They are equal.', 'The widest container has the greatest pressure.', 'The narrowest container has the greatest pressure.', 'It depends on the volume of water in each.', 'Pressure at depth depends only on ρgh, not on the container’s shape.'],
    ['concept', 'What determines the buoyant force on an object submerged in a fluid?', 'The weight of the fluid the object displaces', 'The weight of the object', 'The depth of the object', 'The object’s density', 'Archimedes’ principle: the buoyant force equals the weight of the displaced fluid.'],
    ['concept', 'A block floats at rest on water. How does the buoyant force compare with the block’s weight?', 'It is equal to the block’s weight.', 'It is greater than the block’s weight.', 'It is less than the block’s weight.', 'It is zero.', 'The block is in equilibrium, so the upward buoyant force balances its weight.'],
    ['compare', 'A ship sails from a freshwater river into the denser salt water of the ocean. How does it float in the ocean?', 'It rides higher, with less of its hull underwater.', 'It rides lower in the water.', 'It floats at the same level.', 'It sinks.', 'Denser water gives the same buoyant force with less volume displaced.'],
    ['concept', 'Water flows through a horizontal pipe that narrows. How do the speed and pressure in the narrow section compare with those in the wide section?', 'The speed is greater, and the pressure is lower.', 'The speed is greater, and the pressure is higher.', 'The speed is lower, and the pressure is lower.', 'Both stay the same.', 'Continuity requires a higher speed in the narrow part, and Bernoulli’s equation then gives a lower pressure.'],
    ['concept', 'An ice cube floats in a full glass of water. What happens to the water level as the ice melts?', 'It stays the same.', 'It rises and overflows.', 'It falls.', 'It rises, then falls.', 'Floating ice displaces exactly its own weight of water, which equals the water it becomes when it melts.'],
    ['compare', 'A steel block hangs fully submerged in water from a string. It is lowered from 1 m deep to 3 m deep. How does the buoyant force change?', 'It stays the same.', 'It triples.', 'It increases slightly.', 'It decreases.', 'The displaced volume does not change, so the buoyant force stays the same (water is nearly incompressible).'],
    ['concept', 'A hydraulic lift uses a small piston to lift a car on a large piston. Which statement is correct?', 'The pressure is the same on both pistons, but the small piston must move farther.', 'The large piston moves farther than the small piston.', 'The lift multiplies the work put into it.', 'The pressure is greater on the large piston.', 'Pascal’s principle gives equal pressure; energy conservation means the small piston moves a greater distance.'],
    ['concept', 'For an incompressible fluid flowing steadily through a pipe, which quantity is the same at every cross section?', 'The volume flow rate Av', 'The flow speed', 'The pressure', 'The cross-sectional area', 'The continuity equation states that A₁v₁ = A₂v₂.'],
    ['experiment', 'Students measure the gauge pressure at several depths h in an unknown liquid. Which graph lets them find the liquid’s density?', 'Gauge pressure versus h; density = slope ÷ g', 'Gauge pressure versus h; density = slope', 'h versus gauge pressure; density = slope × g', 'Gauge pressure versus h²; density = slope ÷ g', 'P_gauge = ρgh, so the slope of P versus h is ρg.'],
    { family: 'graph', context: 'Students measured the gauge pressure at different depths in an unknown liquid. Use g = 9.8 m/s².', plot: { type: 'line', xLabel: 'Depth (m)', yLabel: 'Gauge pressure (kPa)', x: [0, 1, 2, 3, 4], series: [{ name: 'Gauge pressure', values: [0, 7.8, 15.7, 23.5, 31.4] }] }, prompt: 'What is the density of the liquid?', choices: ['800 kg/m³', '7,800 kg/m³', '80 kg/m³', '1,000 kg/m³'], explanation: 'The slope is about 7,840 Pa/m = ρg, so ρ = 7,840 ÷ 9.8 = 800 kg/m³.' },
    { family: 'graph', context: 'Students measured the buoyant force on objects with different submerged volumes in one liquid. Use g = 9.8 m/s².', plot: { type: 'line', xLabel: 'Submerged volume (cm³)', yLabel: 'Buoyant force (N)', x: [0, 100, 200, 300, 400], series: [{ name: 'Buoyant force', values: [0, 0.98, 1.96, 2.94, 3.92] }] }, prompt: 'Which liquid were the students most likely using?', choices: ['Water (1,000 kg/m³)', 'Vegetable oil (920 kg/m³)', 'Glycerin (1,260 kg/m³)', 'Mercury (13,600 kg/m³)'], explanation: 'F = ρVg: 0.98 N = ρ(1.0 × 10⁻⁴ m³)(9.8 m/s²) gives ρ = 1,000 kg/m³.' }
  ]
];

// ---------- Helpers for the calculation questions ----------

const G = 9.8;
const GRAV = 6.67e-11;
const P0 = 1.01e5;
const RHO_WATER = 1000;
const SUP = '⁻⁰¹²³⁴⁵⁶⁷⁸⁹';
const sup = text => String(text).replace(/[-0-9]/g, ch => SUP['-0123456789'.indexOf(ch)]);
const rad = degrees => degrees * Math.PI / 180;
const useG = ' Use g = 9.8 m/s².';

// Formats a result to three significant figures, using scientific notation when it is very large or small.
function num(value, digits = 3) {
  if (!Number.isFinite(value)) return 'NaN';
  if (Math.abs(value) < 1e-12) return '0';
  const abs = Math.abs(value);
  let text;
  if (abs >= 1e5 || abs < 1e-3) {
    const [mantissa, exponent] = value.toExponential(digits - 1).split('e');
    text = mantissa + ' × 10' + sup(Number(exponent));
  } else {
    text = abs >= 10 ** digits ? Number(value.toPrecision(digits)).toLocaleString('en-US') : value.toPrecision(digits);
    if (/e/.test(text)) text = Number(text).toLocaleString('en-US');
  }
  return text.replace(/^-/, '−');
}

// Writes a given quantity the way it appears in a problem (keeps the author's digits).
function given(value) {
  const abs = Math.abs(value);
  if (abs !== 0 && (abs >= 1e5 || abs < 1e-3)) return num(value);
  return (abs >= 1000 ? value.toLocaleString('en-US') : String(value)).replace(/^-/, '−');
}

const unit = label => value => num(value) + ' ' + label;

// Writes a factor such as 4, 1/9, or 2/9 times a symbol: "4F", "F/9", "2F/9".
function factor(value, symbol) {
  for (let q = 1; q <= 100; q++) {
    const p = value * q;
    if (Math.abs(p - Math.round(p)) < 1e-9) {
      const top = Math.round(p);
      return (top === 1 ? symbol : top + symbol) + (q === 1 ? '' : '/' + q);
    }
  }
  return num(value) + symbol;
}

// All combinations of the given lists, in order.
const product = (...lists) => lists.reduce((rows, list) => rows.flatMap(row => list.map(item => [...row, item])), [[]]);

// The correct value followed by the first three distinct wrong values from a list of likely mistakes.
// Factor-of-two slips are used as backups when the listed mistakes happen to give the same number.
function options(correct, candidates, format) {
  const out = [format(correct)];
  for (const value of [...candidates, correct * 2, correct / 2, correct * 4, correct / 4]) {
    if (typeof value === 'number' && !Number.isFinite(value)) continue;
    const text = format(value);
    if (out.includes(text) || /NaN/.test(text)) continue;
    out.push(text);
    if (out.length === 4) break;
  }
  return out;
}

// Builds one calculation question; returns null unless there are four distinct choices.
function calc(n, family, key, prompt, choices, explanation, extra = {}) {
  if (choices.length !== 4 || new Set(choices).size !== 4 || choices.some(choice => /NaN|Infinity|undefined/.test(choice))) return null;
  // "A 8 kg cart" → "An 8 kg cart" (also 11 and 18, which start with a vowel sound).
  const article = text => text.replace(/\b([Aa]) (?=8|1[18](?![0-9]))/g, '$1n ');
  return { id: 'phys-' + n + '-' + family + '-' + key, family, prompt: article(prompt), choices, answer: 0, explanation, ...extra };
}

// Builds one question per combination of parameters.
const each = (lists, build) => product(...lists).map(values => build(...values, values.join('_')));

// Samples a sine wave for oscillation graphs.
function wave(amplitude, period, cycles = 2, steps = 16) {
  const x = [];
  const y = [];
  for (let i = 0; i <= steps; i++) {
    const t = period * cycles * i / steps;
    x.push(Number(t.toFixed(3)));
    y.push(Number((amplitude * Math.sin(2 * Math.PI * t / period)).toFixed(2)));
  }
  return { x, y };
}

const shapes = [
  ['hoop', 'thin hoop', 1],
  ['disk', 'solid disk', 1 / 2],
  ['sphere', 'solid sphere', 2 / 5],
  ['shell', 'thin spherical shell', 2 / 3]
];

const orbits = [
  ['Earth', 5.97e24, 6.77e6, 'a space station orbiting Earth'],
  ['Earth', 5.97e24, 7.37e6, 'a weather satellite orbiting Earth'],
  ['Earth', 5.97e24, 2.66e7, 'a navigation satellite orbiting Earth'],
  ['Earth', 5.97e24, 4.22e7, 'a communications satellite orbiting Earth'],
  ['Mars', 6.42e23, 3.8e6, 'an orbiter circling Mars'],
  ['Mars', 6.42e23, 9.4e6, 'a moon of Mars'],
  ['the Moon', 7.35e22, 1.84e6, 'a probe orbiting the Moon'],
  ['the Moon', 7.35e22, 2.2e6, 'a lunar mapping satellite'],
  ['Jupiter', 1.9e27, 4.22e8, 'a moon of Jupiter'],
  ['Jupiter', 1.9e27, 6.71e8, 'a second moon of Jupiter'],
  ['the Sun', 1.99e30, 1.5e11, 'a planet orbiting the Sun'],
  ['the Sun', 1.99e30, 2.28e11, 'a second planet orbiting the Sun']
];

const sinkers = [['aluminum', 2700], ['iron', 7870], ['copper', 8960], ['lead', 11300]];
const floaters = [['pine', 510], ['oak', 750], ['ice', 917], ['cork', 240], ['plastic', 950], ['maple', 650]];
const liquids = [['fresh water', 1000], ['seawater', 1025], ['oil', 850]];

const generators = {
  // Unit 1: Kinematics
  1: n => [
    ...each([[40, 60, 90], [10, 25], [8, 20]], (d1, d2, t, key) => {
      const velocity = (d1 - d2) / t;
      return calc(n, 'calc-average-velocity', key, `A cyclist rides ${d1} m east and then ${d2} m west, taking ${t} s in total. What is the magnitude of the cyclist’s average velocity?`,
        options(velocity, [(d1 + d2) / t, d1 / t, d2 / t, (d1 - d2) / (2 * t)], unit('m/s')),
        `Average velocity = displacement ÷ time = (${d1} − ${d2}) m ÷ ${t} s = ${num(velocity)} m/s. (Distance ÷ time would give average speed instead.)`);
    }),
    ...each([[1.5, 2, 3.5, 4], [3, 5, 8]], (a, t, key) => {
      const x = a * t * t / 2;
      return calc(n, 'calc-distance-from-rest', key, `A car starts from rest and accelerates uniformly at ${a} m/s² for ${t} s. How far does it travel?`,
        options(x, [a * t * t, a * t, a * t * t / 4, a * t / 2], unit('m')),
        `Δx = ½at² = ½(${a})(${t})² = ${num(x)} m.`);
    }),
    ...each([[12, 18, 25, 30], [3, 5, 6.5]], (v0, a, key) => {
      const d = v0 * v0 / (2 * a);
      return calc(n, 'calc-stopping-distance', key, `A car moving at ${v0} m/s brakes with a constant deceleration of ${a} m/s². How far does it travel before stopping?`,
        options(d, [v0 * v0 / a, v0 * v0 / (4 * a), v0 / a, 2 * v0 * v0 / a], unit('m')),
        `v² = v₀² + 2aΔx with v = 0 gives Δx = v₀²/(2a) = ${v0}² ÷ (2 × ${a}) = ${num(d)} m.`);
    }),
    ...each([[1.2, 2.5, 3.6, 5, 7.2, 10, 15, 20, 30, 45, 60, 80]], (h, key) => {
      const t = Math.sqrt(2 * h / G);
      return calc(n, 'calc-drop-time', key, `A stone is dropped from rest from a height of ${h} m. How long does it take to reach the ground? Air resistance is negligible.${useG}`,
        options(t, [Math.sqrt(h / G), 2 * h / G, h / G, Math.sqrt(2 * G * h)], unit('s')),
        `h = ½gt², so t = √(2h/g) = √(2 × ${h} ÷ 9.8) = ${num(t)} s.`);
    }),
    ...each([[1.2, 2.5, 3.6, 5, 7.2, 10, 15, 20, 30, 45, 60, 80]], (h, key) => {
      const v = Math.sqrt(2 * G * h);
      return calc(n, 'calc-drop-speed', key, `A ball is dropped from rest from a height of ${h} m. What is its speed just before it hits the ground? Air resistance is negligible.${useG}`,
        options(v, [Math.sqrt(G * h), 2 * G * h, G * h, Math.sqrt(2 * h / G)], unit('m/s')),
        `v² = 2gh, so v = √(2 × 9.8 × ${h}) = ${num(v)} m/s.`);
    }),
    ...each([[4, 6, 8, 10, 12, 14, 15, 18, 20, 22, 25, 30]], (v0, key) => {
      const height = v0 * v0 / (2 * G);
      return calc(n, 'calc-max-height', key, `A ball is thrown straight up at ${v0} m/s. How high above the launch point does it rise? Air resistance is negligible.${useG}`,
        options(height, [v0 * v0 / G, v0 / (2 * G), v0 * v0 / (4 * G), v0 / G], unit('m')),
        `At the top v = 0, so h = v₀²/(2g) = ${v0}² ÷ 19.6 = ${num(height)} m.`);
    }),
    ...each([[4, 6, 8, 10, 12, 14, 15, 18, 20, 22, 25, 30]], (v0, key) => {
      const t = v0 / G;
      return calc(n, 'calc-time-to-top', key, `A ball is launched straight up at ${v0} m/s. How long does it take to reach its highest point? Air resistance is negligible.${useG}`,
        options(t, [2 * v0 / G, v0 / (2 * G), v0 * v0 / G, v0 * v0 / (2 * G)], unit('s')),
        `v = v₀ − gt = 0 at the top, so t = v₀/g = ${v0} ÷ 9.8 = ${num(t)} s.`);
    }),
    ...each([[2, 4, 6], [1.2, 5, 20, 45]], (vx, h, key) => {
      const range = vx * Math.sqrt(2 * h / G);
      return calc(n, 'calc-horizontal-launch', key, `A ball rolls off a horizontal table ${h} m high with a speed of ${vx} m/s. How far from the base of the table does it land? Air resistance is negligible.${useG}`,
        options(range, [vx * Math.sqrt(h / G), vx * 2 * h / G, Math.sqrt(2 * h / G), vx * h / G, range / 2], unit('m')),
        `Fall time t = √(2h/g) = ${num(Math.sqrt(2 * h / G))} s; horizontal distance = v_x t = ${vx} × ${num(Math.sqrt(2 * h / G))} = ${num(range)} m.`);
    }),
    ...each([[10, 20, 30], [20, 30, 45, 60]], (v0, angle, key) => {
      const t = 2 * v0 * Math.sin(rad(angle)) / G;
      return calc(n, 'calc-flight-time', key, `A projectile is launched from level ground at ${v0} m/s at ${angle}° above the horizontal. How long is it in the air? Air resistance is negligible.${useG}`,
        options(t, [v0 * Math.sin(rad(angle)) / G, 2 * v0 * Math.cos(rad(angle)) / G, 2 * v0 / G, v0 * Math.cos(rad(angle)) / G], unit('s')),
        `The vertical launch speed is v₀ sin θ = ${num(v0 * Math.sin(rad(angle)))} m/s, so t = 2v₀ sin θ / g = ${num(t)} s.`);
    }),
    ...each([[10, 20, 30], [20, 30, 45, 60]], (v0, angle, key) => {
      const range = v0 * v0 * Math.sin(rad(2 * angle)) / G;
      return calc(n, 'calc-range', key, `A ball is kicked from level ground at ${v0} m/s at ${angle}° above the horizontal. How far away does it land? Air resistance is negligible.${useG}`,
        options(range, [v0 * v0 * Math.sin(rad(angle)) / G, v0 * v0 / (2 * G), v0 * v0 * Math.sin(rad(2 * angle)) / (2 * G), v0 * v0 * Math.cos(rad(angle)) / G, 2 * range], unit('m')),
        `R = v₀² sin 2θ / g = ${v0}² × sin ${2 * angle}° ÷ 9.8 = ${num(range)} m.`);
    }),
    ...each([[3, 4, 5, 6], [1.5, 2, 3]], (vb, vr, key) => {
      const speed = Math.hypot(vb, vr);
      return calc(n, 'calc-relative-velocity', key, `A boat points straight across a river and moves at ${vb} m/s relative to the water. The current flows at ${vr} m/s. What is the boat’s speed relative to the riverbank?`,
        options(speed, [vb + vr, vb - vr, vb, vb * vb + vr * vr], unit('m/s')),
        `The two velocities are perpendicular: v = √(${vb}² + ${vr}²) = ${num(speed)} m/s.`);
    }),
    ...each([[60, 90, 120], [2, 3, 4, 5]], (width, vb, key) => {
      const vr = 1.5;
      const t = width / vb;
      return calc(n, 'calc-crossing-time', key, `A river is ${width} m wide and flows at ${vr} m/s. A swimmer heads straight across at ${vb} m/s relative to the water. How long does it take to cross?`,
        options(t, [width / Math.hypot(vb, vr), width / (vb + vr), width / vr, width / (vb - vr)], unit('s')),
        `Only the velocity component across the river matters: t = ${width} m ÷ ${vb} m/s = ${num(t)} s. The current only carries the swimmer downstream.`);
    }),
    ...[[3, 4], [5, 12], [6, 8], [-7, 24], [8, -15], [-9, 12], [2.5, 6], [-20, 21], [12, 16], [-10, -24], [1.5, 2], [9, 40]].map(([x, y]) => {
      const magnitude = Math.hypot(x, y);
      return calc(n, 'calc-vector-magnitude', x + '_' + y, `A displacement vector has components Δx = ${given(x)} m and Δy = ${given(y)} m. What is its magnitude?`,
        options(magnitude, [Math.abs(x) + Math.abs(y), Math.abs(x - y), Math.abs(Math.abs(x) - Math.abs(y)), x * x + y * y], unit('m')),
        `|Δr| = √(Δx² + Δy²) = √(${given(x)}² + ${given(y)}²) = ${num(magnitude)} m.`);
    }),
    ...each([[0, 2, 4], [1.5, 2, 3]], (v0, a, key) => {
      const times = [0, 1, 2, 3, 4];
      const values = times.map(t => v0 + a * t);
      const vf = values[4];
      const plot = { type: 'line', xLabel: 'Time (s)', yLabel: 'Velocity (m/s)', x: times, series: [{ name: 'Velocity', values }] };
      const context = 'The graph shows the velocity of a cart moving along a straight track.';
      const displacement = v0 * 4 + a * 8;
      return [
        calc(n, 'graph-vt', 'disp-' + key, 'What is the cart’s displacement from t = 0 to t = 4 s?',
          options(displacement, [vf * 4, v0 ? v0 * 4 : vf, vf * 2, a * 8], unit('m')),
          `Displacement is the area under the graph: ½(${given(v0)} + ${given(vf)}) m/s × 4 s = ${num(displacement)} m.`, { plot, context }),
        calc(n, 'graph-vt', 'accel-' + key, 'What is the cart’s acceleration?',
          options(a, [vf / 4, vf, a / 2, 4 / a], unit('m/s²')),
          `Acceleration is the slope: (${given(vf)} − ${given(v0)}) m/s ÷ 4 s = ${num(a)} m/s².`, { plot, context })
      ];
    }).flat()
  ],

  // Unit 2: Force and Translational Dynamics
  2: n => [
    ...each([[2, 4, 6], [30, 50], [0.2, 0.35]], (m, F, mu, key) => {
      const a = (F - mu * m * G) / m;
      return calc(n, 'calc-net-force', key, `A ${m} kg box is pulled across a floor by a horizontal ${F} N force. The coefficient of kinetic friction is ${mu}. What is the box’s acceleration?${useG}`,
        options(a, [F / m, (F + mu * m * G) / m, (F - mu * G) / m, (F - mu * m) / m], unit('m/s²')),
        `Friction = μmg = ${mu} × ${m} × 9.8 = ${num(mu * m * G)} N. a = (F − f)/m = (${F} − ${num(mu * m * G)}) ÷ ${m} = ${num(a)} m/s².`);
    }),
    ...[10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 70].map(angle => {
      const a = G * Math.sin(rad(angle));
      return calc(n, 'calc-incline', String(angle), `A block slides down a frictionless ramp inclined at ${angle}° above the horizontal. What is the magnitude of its acceleration?${useG}`,
        options(a, [G * Math.cos(rad(angle)), G * Math.tan(rad(angle)), G, a / 2, G / Math.sin(rad(angle))], unit('m/s²')),
        `Only the component of gravity along the ramp accelerates the block: a = g sin θ = 9.8 × sin ${angle}° = ${num(a)} m/s².`);
    }),
    ...each([[3, 4, 5, 6], [1, 2, 2.5]], (m1, m2, key) => {
      const a = (m1 - m2) * G / (m1 + m2);
      return calc(n, 'calc-atwood-acceleration', key, `Blocks of ${m1} kg and ${m2} kg hang from opposite ends of a light string over a light, frictionless pulley. What is the magnitude of their acceleration?${useG}`,
        options(a, [(m1 - m2) * G / m1, G, m1 * G / (m1 + m2), (m1 - m2) * G / m2], unit('m/s²')),
        `Treat both blocks as one system: a = (m₁ − m₂)g/(m₁ + m₂) = (${m1} − ${m2})(9.8) ÷ ${m1 + m2} = ${num(a)} m/s².`);
    }),
    ...each([[3, 4, 5, 6], [1, 2, 2.5]], (m1, m2, key) => {
      const T = 2 * m1 * m2 * G / (m1 + m2);
      return calc(n, 'calc-atwood-tension', key, `Blocks of ${m1} kg and ${m2} kg hang from opposite ends of a light string over a light, frictionless pulley and are released. What is the tension in the string?${useG}`,
        options(T, [m1 * G, m2 * G, (m1 - m2) * G, (m1 + m2) * G / 2], unit('N')),
        `a = (m₁ − m₂)g/(m₁ + m₂) = ${num((m1 - m2) * G / (m1 + m2))} m/s². For the lighter block, T − m₂g = m₂a, so T = ${num(T)} N, between the two weights.`);
    }),
    ...each([[2, 4, 6, 8], [0.5, 1, 2]], (m1, m2, key) => {
      const a = m2 * G / (m1 + m2);
      return calc(n, 'calc-table-pulley', key, `A ${m1} kg cart on a frictionless table is connected by a string over a pulley to a hanging ${m2} kg mass. What is the acceleration of the system?${useG}`,
        options(a, [G, m2 * G / m1, m1 * G / (m1 + m2), m2 * G / (m1 - m2)], unit('m/s²')),
        `Only the hanging weight is unbalanced: a = m₂g/(m₁ + m₂) = ${num(m2 * G)} N ÷ ${m1 + m2} kg = ${num(a)} m/s².`);
    }),
    ...each([[2, 4, 6, 8], [0.5, 1, 2]], (m1, m2, key) => {
      const T = m1 * m2 * G / (m1 + m2);
      return calc(n, 'calc-table-tension', key, `A ${m1} kg cart on a frictionless table is connected by a string over a pulley to a hanging ${m2} kg mass. What is the tension in the string?${useG}`,
        options(T, [m2 * G, m1 * G, (m1 + m2) * G, m2 * G / 2], unit('N')),
        `a = m₂g/(m₁ + m₂) = ${num(m2 * G / (m1 + m2))} m/s². The string alone accelerates the cart: T = m₁a = ${num(T)} N, which is less than the hanging weight.`);
    }),
    ...each([[50, 60, 75], [1.5, 2], ['upward', 'downward']], (m, a, direction, key) => {
      const N = direction === 'upward' ? m * (G + a) : m * (G - a);
      const other = direction === 'upward' ? m * (G - a) : m * (G + a);
      return calc(n, 'calc-elevator', key, `A ${m} kg person stands on a scale in an elevator that is accelerating ${direction} at ${a} m/s². What does the scale read (the normal force)?${useG}`,
        options(N, [m * G, other, m * a, m * (G + 2 * a)], unit('N')),
        `N − mg = ma${direction === 'upward' ? '' : ' with a downward (negative)'}, so N = m(g ${direction === 'upward' ? '+' : '−'} a) = ${m}(9.8 ${direction === 'upward' ? '+' : '−'} ${a}) = ${num(N)} N.`);
    }),
    ...each([[3, 5, 8], [10, 20, 40, 60]], (m, F, key) => {
      const staticMax = 0.5 * m * G;
      const kinetic = 0.4 * m * G;
      const moves = F > staticMax;
      const friction = moves ? kinetic : F;
      return calc(n, 'calc-static-friction', key, `A ${m} kg crate rests on a floor where μs = 0.50 and μk = 0.40. A worker pushes it horizontally with a ${F} N force. What is the magnitude of the friction force on the crate?${useG}`,
        options(friction, [moves ? F : staticMax, moves ? staticMax : kinetic, m * G, moves ? F - kinetic : kinetic], unit('N')),
        moves
          ? `The maximum static friction is 0.50 × ${m} × 9.8 = ${num(staticMax)} N, which is less than ${F} N, so the crate slides. Kinetic friction = 0.40 × ${m} × 9.8 = ${num(kinetic)} N.`
          : `The maximum static friction is ${num(staticMax)} N, which is more than ${F} N, so the crate stays at rest and static friction just balances the push: ${F} N.`);
    }),
    ...each([[0.2, 0.5, 1, 1.5], [20, 50, 120]], (m, k, key) => {
      const x = m * G / k;
      return calc(n, 'calc-spring-stretch', key, `A ${m} kg mass hangs at rest from a spring with spring constant ${k} N/m. How far is the spring stretched?${useG}`,
        options(x, [m / k, m * G / (2 * k), 2 * m * G / k, k / (m * G)], unit('m')),
        `At equilibrium kx = mg, so x = mg/k = (${m} × 9.8) ÷ ${k} = ${num(x)} m.`);
    }),
    ...each([[0.25, 0.8, 2], [3, 6], [0.5, 1.5]], (m, v, r, key) => {
      const F = m * v * v / r;
      return calc(n, 'calc-centripetal-force', key, `A ${m} kg ball on a string moves in a horizontal circle of radius ${r} m at a constant speed of ${v} m/s. What net force acts on it?`,
        options(F, [m * v / r, m * v * v * r, v * v / r, m * v * v / (2 * r)], unit('N')),
        `F = mv²/r = ${m} × ${v}² ÷ ${r} = ${num(F)} N, directed toward the center.`);
    }),
    ...[0.3, 0.5, 0.8, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8].map(r => {
      const v = Math.sqrt(G * r);
      return calc(n, 'calc-loop-speed', String(r), `A roller coaster car goes around a vertical loop of radius ${r} m. What is the minimum speed at the top of the loop for the car to stay on the track?${useG}`,
        options(v, [Math.sqrt(2 * G * r), G * r, Math.sqrt(r / G), Math.sqrt(5 * G * r)], unit('m/s')),
        `At the minimum speed, gravity alone provides the centripetal force: mg = mv²/r, so v = √(gr) = √(9.8 × ${r}) = ${num(v)} m/s.`);
    }),
    ...each([[1, 2, 3], [2, 3, 0.5, 4]], (massFactor, distanceFactor, key) => {
      const ratio = massFactor / distanceFactor ** 2;
      const massText = massFactor === 1 ? 'the masses stay the same' : `one object’s mass is multiplied by ${massFactor}`;
      const distanceText = distanceFactor === 0.5 ? 'the distance between their centers is halved' : `the distance between their centers is multiplied by ${distanceFactor}`;
      return calc(n, 'calc-gravity-ratio', key, `Two objects attract each other with a gravitational force F. If ${massText} and ${distanceText}, what is the new gravitational force?`,
        options(ratio, [massFactor / distanceFactor, massFactor * distanceFactor ** 2, distanceFactor ** 2 / massFactor, massFactor * distanceFactor], value => factor(value, 'F')),
        `F = Gm₁m₂/r², so the force is multiplied by ${massFactor} ÷ ${given(distanceFactor)}², giving ${factor(ratio, 'F')}.`);
    }),
    ...each([[0.5, 2, 4, 10], [0.5, 2, 3]], (massFactor, radiusFactor, key) => {
      const g = G * massFactor / radiusFactor ** 2;
      return calc(n, 'calc-surface-gravity', key, `A planet has ${given(massFactor)} times Earth’s mass and ${given(radiusFactor)} times Earth’s radius. What is the gravitational field strength at its surface? (Earth’s is 9.8 N/kg.)`,
        options(g, [G * massFactor / radiusFactor, G * massFactor * radiusFactor ** 2, G * radiusFactor ** 2 / massFactor, G * massFactor], unit('N/kg')),
        `g = GM/R², so g = 9.8 × ${given(massFactor)} ÷ ${given(radiusFactor)}² = ${num(g)} N/kg.`);
    }),
    ...each([[0.4, 0.6, 0.8], [25, 50, 80, 120]], (mu, r, key) => {
      const v = Math.sqrt(mu * G * r);
      return calc(n, 'calc-curve-speed', key, `A car rounds a flat curve of radius ${r} m. The coefficient of static friction between the tires and road is ${mu}. What is the maximum speed at which the car can take the curve without skidding?${useG}`,
        options(v, [mu * G * r, Math.sqrt(G * r), Math.sqrt(mu * r), Math.sqrt(2 * mu * G * r)], unit('m/s')),
        `Static friction provides the centripetal force: μmg = mv²/r, so v = √(μgr) = √(${mu} × 9.8 × ${r}) = ${num(v)} m/s.`);
    })
  ],

  // Unit 3: Work, Energy, and Power
  3: n => [
    ...each([[0.15, 2, 60, 1200], [3, 12, 25]], (m, v, key) => {
      const K = m * v * v / 2;
      return calc(n, 'calc-kinetic-energy', key, `What is the kinetic energy of a ${given(m)} kg object moving at ${v} m/s?`,
        options(K, [m * v * v, m * v / 2, m * v * v / 4, m * v], unit('J')),
        `K = ½mv² = ½ × ${given(m)} × ${v}² = ${num(K)} J.`);
    }),
    ...each([[20, 50, 80], [5, 12], [25, 40]], (F, d, angle, key) => {
      const W = F * d * Math.cos(rad(angle));
      return calc(n, 'calc-work-angle', key, `A sled is pulled ${d} m across level snow by a rope with tension ${F} N at ${angle}° above the horizontal. How much work does the tension do?`,
        options(W, [F * d, F * d * Math.sin(rad(angle)), F * Math.cos(rad(angle)), F * d / Math.cos(rad(angle))], unit('J')),
        `W = Fd cos θ = ${F} × ${d} × cos ${angle}° = ${num(W)} J. Only the component along the motion does work.`);
    }),
    ...each([[0.5, 2, 5], [1.5, 4, 9, 12]], (m, h, key) => {
      const v = Math.sqrt(2 * G * h);
      return calc(n, 'calc-energy-speed', key, `A ${m} kg cart starts from rest and rolls down a frictionless track, dropping ${h} m in height. What is its speed at the bottom?${useG}`,
        options(v, [Math.sqrt(2 * m * G * h), Math.sqrt(G * h), 2 * G * h, m * G * h], unit('m/s')),
        `mgh = ½mv², so the mass cancels: v = √(2gh) = √(2 × 9.8 × ${h}) = ${num(v)} m/s.`);
    }),
    ...each([[200, 450, 800], [0.05, 0.1, 0.15, 0.2]], (k, x, key) => {
      const m = 0.5;
      const v = x * Math.sqrt(k / m);
      return calc(n, 'calc-spring-launch', key, `A spring with k = ${k} N/m is compressed ${x} m and launches a 0.50 kg block across a frictionless surface. What is the block’s speed after it leaves the spring?`,
        options(v, [x * k / m, Math.sqrt(k * x / m), x * Math.sqrt(m / k), k * x * x / 2], unit('m/s')),
        `½kx² = ½mv², so v = x√(k/m) = ${x} × √(${k} ÷ 0.50) = ${num(v)} m/s.`);
    }),
    ...each([[10, 25, 60], [2, 5], [4, 10]], (m, h, t, key) => {
      const P = m * G * h / t;
      return calc(n, 'calc-lifting-power', key, `A motor lifts a ${m} kg load ${h} m upward at constant speed in ${t} s. What average power does the motor deliver?${useG}`,
        options(P, [m * G * h, m * h / t, m * G * h * t, m * G / t], unit('W')),
        `P = W/t = mgh/t = (${m} × 9.8 × ${h}) ÷ ${t} = ${num(P)} W.`);
    }),
    ...each([[4, 6, 9, 12], [0.15, 0.3, 0.5]], (v0, mu, key) => {
      const d = v0 * v0 / (2 * mu * G);
      return calc(n, 'calc-friction-stop', key, `A hockey puck slides at ${v0} m/s onto a rough patch where the coefficient of kinetic friction is ${mu}. How far does it slide before stopping?${useG}`,
        options(d, [v0 * v0 / (mu * G), v0 / (2 * mu * G), v0 * v0 / (2 * G), mu * v0 * v0 / (2 * G)], unit('m')),
        `Friction does work −μmgd = −½mv₀², so d = v₀²/(2μg) = ${v0}² ÷ (2 × ${mu} × 9.8) = ${num(d)} m.`);
    }),
    ...each([[2, 5, 8], [3, 6], [0.6, 0.8]], (m, h, fraction, key) => {
      const vf = Number((fraction * Math.sqrt(2 * G * h)).toFixed(1));
      const lost = m * G * h - m * vf * vf / 2;
      return calc(n, 'calc-energy-lost', key, `A ${m} kg box slides from rest down a rough ramp, dropping ${h} m in height. Its speed at the bottom is ${vf} m/s. How much mechanical energy was converted to internal energy by friction?${useG}`,
        options(lost, [m * G * h, m * vf * vf / 2, m * G * h + m * vf * vf / 2, m * G * h - m * vf], unit('J')),
        `Energy lost = mgh − ½mv² = ${num(m * G * h)} J − ${num(m * vf * vf / 2)} J = ${num(lost)} J.`);
    }),
    ...each([[500, 1200, 3000], [8, 15, 30, 40]], (F, v, key) => {
      const P = F * v;
      return calc(n, 'calc-power-velocity', key, `A truck’s engine exerts a constant forward force of ${given(F)} N while the truck moves at a constant ${v} m/s. What power does the engine deliver?`,
        options(P, [F / v, F * v / 2, F * v * v, v / F], unit('W')),
        `P = Fv = ${given(F)} × ${v} = ${num(P)} W.`);
    }),
    ...each([[2, 3, 0.5, 4], [1, 2, 0.5]], (speedFactor, massFactor, key) => {
      const ratio = massFactor * speedFactor ** 2;
      const massText = massFactor === 1 ? 'its mass stays the same' : massFactor === 0.5 ? 'its mass is halved' : 'its mass is doubled';
      const speedText = speedFactor === 0.5 ? 'its speed is halved' : `its speed is multiplied by ${speedFactor}`;
      return calc(n, 'calc-kinetic-ratio', key, `An object has kinetic energy K. If ${speedText} and ${massText}, what is its new kinetic energy?`,
        options(ratio, [massFactor * speedFactor, speedFactor ** 2 / massFactor, massFactor * speedFactor ** 3, massFactor ** 2 * speedFactor], value => factor(value, 'K')),
        `K = ½mv², so K changes by ${given(massFactor)} × ${given(speedFactor)}², giving ${factor(ratio, 'K')}.`);
    }),
    ...each([[10, 20, 40], [1, 2], [1, 2]], (Fmax, rise, flat, key) => {
      const work = Fmax * rise / 2 + Fmax * flat;
      const plot = { type: 'line', xLabel: 'Position (m)', yLabel: 'Force (N)', x: [0, rise, rise + flat], series: [{ name: 'Force', values: [0, Fmax, Fmax] }] };
      return calc(n, 'graph-force-position', key, `How much work does the force do from x = 0 to x = ${rise + flat} m?`,
        options(work, [Fmax * (rise + flat), Fmax * (rise + flat) / 2, Fmax * flat, Fmax * rise], unit('J')),
        `Work is the area under the F–x graph: ½(${rise} m)(${Fmax} N) + (${flat} m)(${Fmax} N) = ${num(work)} J.`,
        { plot, context: 'The graph shows the force exerted on a cart as it moves along a straight track.' });
    })
  ],

  // Unit 4: Linear Momentum
  4: n => [
    ...each([[0.15, 2.5, 80, 1200], [4, 15, 30]], (m, v, key) => {
      const p = m * v;
      return calc(n, 'calc-momentum', key, `What is the magnitude of the momentum of a ${given(m)} kg object moving at ${v} m/s?`,
        options(p, [m * v * v / 2, m * v / 2, m / v, m * v * v], unit('kg·m/s')),
        `p = mv = ${given(m)} × ${v} = ${num(p)} kg·m/s.`);
    }),
    ...each([[0.2, 0.5, 2], [30, 120], [0.02, 0.1]], (m, F, dt, key) => {
      const dv = F * dt / m;
      return calc(n, 'calc-impulse-velocity', key, `A ${m} kg puck at rest is struck by an average force of ${F} N lasting ${dt} s. What speed does the puck gain?`,
        options(dv, [F * dt, F / m, F * dt * m, F * dt / (2 * m)], unit('m/s')),
        `Impulse = FΔt = ${num(F * dt)} N·s = mΔv, so Δv = ${num(F * dt)} ÷ ${m} = ${num(dv)} m/s.`);
    }),
    ...each([[1, 2, 3], [4, 6], [1, 2]], (m1, v1, m2, key) => {
      const vf = m1 * v1 / (m1 + m2);
      return calc(n, 'calc-inelastic', key, `A ${m1} kg cart moving at ${v1} m/s collides with a stationary ${m2} kg cart, and they stick together. What is their speed just after the collision?`,
        options(vf, [v1, m1 * v1 / m2, v1 / 2, m2 * v1 / (m1 + m2)], unit('m/s')),
        `Momentum is conserved: ${m1} × ${v1} = (${m1} + ${m2})v, so v = ${num(vf)} m/s.`);
    }),
    ...each([[2, 3], [5, 8], [1, 4]], (m1, v1, m2, key) => {
      const v2 = -3;
      const vf = (m1 * v1 + m2 * v2) / (m1 + m2);
      const signed = value => num(value) + ' m/s';
      return calc(n, 'calc-head-on', key, `A ${m1} kg cart moving at +${v1} m/s collides head-on with a ${m2} kg cart moving at −3 m/s, and they stick together. What is their velocity just after the collision? (Positive is to the right.)`,
        options(vf, [(m1 * v1 - m2 * v2) / (m1 + m2), (v1 + v2) / 2, (m1 * v1 + m2 * v2) / m1, -vf], signed),
        `Total momentum = ${m1}(${v1}) + ${m2}(−3) = ${num(m1 * v1 + m2 * v2)} kg·m/s. v = ${num(m1 * v1 + m2 * v2)} ÷ ${m1 + m2} = ${num(vf)} m/s${vf < 0 ? ' (to the left)' : ' (to the right)'}.`);
    }),
    ...each([[1, 2, 3], [4, 6], [1, 2]], (m1, v1, m2, key) => {
      const vf = m1 * v1 / (m1 + m2);
      const before = m1 * v1 * v1 / 2;
      const after = (m1 + m2) * vf * vf / 2;
      return calc(n, 'calc-energy-loss-collision', key, `A ${m1} kg cart moving at ${v1} m/s hits a stationary ${m2} kg cart, and they stick together. How much kinetic energy is lost in the collision?`,
        options(before - after, [before, after, 0, before / 2], unit('J')),
        `Final speed = ${num(vf)} m/s. K before = ${num(before)} J; K after = ${num(after)} J; lost = ${num(before - after)} J.`);
    }),
    ...each([[0.01, 0.025, 0.05], [350, 600], [3, 5]], (m1, v1, m2, key) => {
      const v2 = m1 * v1 / m2;
      return calc(n, 'calc-recoil', key, `A ${m2} kg launcher at rest fires a ${m1} kg projectile forward at ${v1} m/s. What is the launcher’s recoil speed?`,
        options(v2, [v1, m1 * v1, Math.sqrt(m1 / m2) * v1, m1 * v1 / (m1 + m2) * 2, m2 * v1 * m1], unit('m/s')),
        `Total momentum stays zero: m₁v₁ = m₂v₂, so v₂ = (${m1} × ${v1}) ÷ ${m2} = ${num(v2)} m/s.`);
    }),
    ...each([[1, 2, 4], [1, 3], [6, 10]], (m1, m2, v1, key) => {
      const v2f = 2 * m1 * v1 / (m1 + m2);
      return calc(n, 'calc-elastic', key, `A ${m1} kg ball moving at ${v1} m/s makes a head-on elastic collision with a stationary ${m2} kg ball. What is the speed of the struck ball (the one that was at rest) after the collision?`,
        options(v2f, [v1, m1 * v1 / (m1 + m2), Math.abs(m1 - m2) * v1 / (m1 + m2), m1 * v1 / m2, v1 / 2], unit('m/s')),
        `For a 1D elastic collision with a target at rest, v₂ = 2m₁v₁/(m₁ + m₂) = 2(${m1})(${v1}) ÷ ${m1 + m2} = ${num(v2f)} m/s.`);
    }),
    ...each([[1, 2, 3], [2, 5], [1.2, 3]], (m1, m2, d, key) => {
      const x = m2 * d / (m1 + m2);
      return calc(n, 'calc-center-of-mass', key, `A ${m1} kg mass sits at x = 0, and a ${m2} kg mass sits at x = ${d} m. Where is the center of mass of the two-object system?`,
        options(x, [d / 2, m1 * d / (m1 + m2), m2 * d / m1, d * m1 / m2], value => 'x = ' + num(value) + ' m'),
        `x_cm = (m₁x₁ + m₂x₂)/(m₁ + m₂) = (0 + ${m2} × ${d}) ÷ ${m1 + m2} = ${num(x)} m, closer to the heavier mass.`);
    }),
    ...each([[0.06, 0.15, 0.45], [12, 25], [0.004, 0.01]], (m, v, dt, key) => {
      const rebound = 0.8 * v;
      const F = m * (v + rebound) / dt;
      return calc(n, 'calc-bounce-force', key, `A ${m} kg ball hits a wall at ${v} m/s and bounces straight back at ${num(rebound)} m/s. The contact lasts ${dt} s. What is the magnitude of the average force from the wall?`,
        options(F, [m * (v - rebound) / dt, m * v / dt, m * (v + rebound) * dt, m * v * v / dt], unit('N')),
        `The velocity reverses, so Δp = m(v + v′) = ${m} × ${num(v + rebound)} = ${num(m * (v + rebound))} kg·m/s. F = Δp/Δt = ${num(F)} N.`);
    }),
    ...each([[100, 300, 600, 1200], [0.02, 0.05, 0.1]], (Fmax, T, key) => {
      const J = Fmax * T / 2;
      const plot = { type: 'line', xLabel: 'Time (s)', yLabel: 'Force (N)', x: [0, Number((T / 2).toFixed(3)), T], series: [{ name: 'Force', values: [0, Fmax, 0] }] };
      return calc(n, 'graph-force-time', key, 'What impulse is delivered to the object during the collision?',
        options(J, [Fmax * T, Fmax * T / 4, Fmax / T, Fmax], unit('N·s')),
        `Impulse is the area under the force–time graph: ½ × ${T} s × ${Fmax} N = ${num(J)} N·s.`,
        { plot, context: 'The graph shows the force exerted on an object during a collision.' });
    })
  ],

  // Unit 5: Torque and Rotational Dynamics
  5: n => [
    ...each([[0.25, 0.4, 0.8], [15, 40], [90, 30]], (r, F, angle, key) => {
      const tau = r * F * Math.sin(rad(angle));
      return calc(n, 'calc-torque', key, `A ${F} N force is applied ${r} m from a pivot at an angle of ${angle}° to the lever arm. What is the magnitude of the torque about the pivot?`,
        options(tau, [r * F * Math.cos(rad(angle)), r * F, F / r, r * F / 2, r * r * F], unit('N·m')),
        `τ = rF sin θ = ${r} × ${F} × sin ${angle}° = ${num(tau)} N·m.`);
    }),
    ...each([[1.5, 3, 6], [2, 5, 8, 12]], (alpha, t, key) => {
      const omega = alpha * t;
      return calc(n, 'calc-angular-velocity', key, `A wheel starts from rest with a constant angular acceleration of ${alpha} rad/s². What is its angular velocity after ${t} s?`,
        options(omega, [alpha * t * t / 2, alpha / t, alpha * t * t, alpha * t / 2], unit('rad/s')),
        `ω = ω₀ + αt = 0 + ${alpha} × ${t} = ${num(omega)} rad/s.`);
    }),
    ...each([[2, 5], [1.5, 4], [2, 4, 6]], (omega0, alpha, t, key) => {
      const theta = omega0 * t + alpha * t * t / 2;
      return calc(n, 'calc-angular-displacement', key, `A turntable spinning at ${omega0} rad/s speeds up with a constant angular acceleration of ${alpha} rad/s². Through what angle does it turn in the next ${t} s?`,
        options(theta, [omega0 * t, alpha * t * t / 2, omega0 * t + alpha * t * t, (omega0 + alpha) * t], unit('rad')),
        `Δθ = ω₀t + ½αt² = ${omega0}(${t}) + ½(${alpha})(${t})² = ${num(theta)} rad.`);
    }),
    ...each([[2, 5, 8], [10, 40, 90, 160]], (alpha, theta, key) => {
      const omega = Math.sqrt(2 * alpha * theta);
      return calc(n, 'calc-omega-from-angle', key, `A disk starts from rest and turns through ${theta} rad with a constant angular acceleration of ${alpha} rad/s². What is its final angular velocity?`,
        options(omega, [2 * alpha * theta, Math.sqrt(alpha * theta), alpha * theta, theta / alpha], unit('rad/s')),
        `ω² = ω₀² + 2αΔθ, so ω = √(2 × ${alpha} × ${theta}) = ${num(omega)} rad/s.`);
    }),
    ...each([[2, 6, 15], [0.1, 0.25, 0.4, 1.2]], (omega, r, key) => {
      const v = omega * r;
      return calc(n, 'calc-tangential-speed', key, `A point on a spinning wheel is ${r} m from the axle. The wheel turns at ${omega} rad/s. What is the point’s tangential speed?`,
        options(v, [omega / r, omega * r * r, 2 * Math.PI * omega * r, r / omega], unit('m/s')),
        `v = ωr = ${omega} × ${r} = ${num(v)} m/s.`);
    }),
    ...each([[0.2, 0.5, 1.5], [0.3, 0.6]], (m, r, key) => {
      const I = 2 * m * r * r;
      return calc(n, 'calc-point-inertia-center', key, `Two small ${m} kg masses are attached to the ends of a light rod of length ${num(2 * r, 2)} m. What is the system’s rotational inertia about an axis through the center of the rod, perpendicular to it?`,
        options(I, [m * r * r, 2 * m * r, 8 * m * r * r, 4 * m * r * r], unit('kg·m²')),
        `Each mass is ${r} m from the axis: I = Σmr² = 2 × ${m} × ${r}² = ${num(I)} kg·m².`);
    }),
    ...each([[0.2, 0.5, 1.5], [0.3, 0.6]], (m, r, key) => {
      const L = 2 * r;
      const I = m * L * L;
      return calc(n, 'calc-point-inertia-end', key, `Two small ${m} kg masses are attached to the ends of a light rod of length ${num(L, 2)} m. What is the system’s rotational inertia about an axis through one end of the rod, perpendicular to it?`,
        options(I, [2 * m * L * L, 2 * m * r * r, m * L, m * L * L / 2], unit('kg·m²')),
        `The mass at the pivot contributes nothing; the other is ${num(L, 2)} m away: I = ${m} × ${num(L, 2)}² = ${num(I)} kg·m².`);
    }),
    ...each([[2, 6, 15], [0.05, 0.4, 1.5, 3]], (tau, I, key) => {
      const alpha = tau / I;
      return calc(n, 'calc-angular-acceleration', key, `A net torque of ${tau} N·m acts on a wheel whose rotational inertia is ${I} kg·m². What is its angular acceleration?`,
        options(alpha, [tau * I, I / tau, tau / (2 * I), tau * tau / I], unit('rad/s²')),
        `α = τ/I = ${tau} ÷ ${I} = ${num(alpha)} rad/s².`);
    }),
    ...each([[['disk', 'uniform solid disk', 1 / 2, 'about its central axis', '½MR²'], ['hoop', 'thin hoop', 1, 'about its central axis', 'MR²'], ['rod-center', 'thin uniform rod', 1 / 12, 'about a perpendicular axis through its center', 'ML²/12'], ['rod-end', 'thin uniform rod', 1 / 3, 'about a perpendicular axis through one end', 'ML²/3'], ['sphere', 'uniform solid sphere', 2 / 5, 'about an axis through its center', '⅖MR²']], [[2, 0.3], [5, 0.5]]], (shape, [M, size], key) => {
      const [name, label, c, axis, formula] = shape;
      const I = c * M * size * size;
      const isRod = name.startsWith('rod');
      const sizeText = isRod ? `length ${size} m` : `radius ${size} m`;
      const wrong = [1 / 2, 1, 1 / 12, 1 / 3, 2 / 5].filter(value => value !== c).map(value => value * M * size * size);
      return calc(n, 'calc-shape-inertia', name + '_' + M, `What is the rotational inertia of a ${label} of mass ${M} kg and ${sizeText} ${axis}?`,
        options(I, [...wrong, M * size], unit('kg·m²')),
        `For a ${label} ${axis}, I = ${formula} = ${num(I)} kg·m².`);
    }),
    ...each([[20, 30, 40], [1.5, 2], [25, 50]], (m1, x1, m2, key) => {
      const x2 = m1 * x1 / m2;
      return calc(n, 'calc-seesaw', key, `A ${m1} kg child sits ${x1} m from the pivot of a seesaw. How far from the pivot, on the other side, must a ${m2} kg child sit to balance the seesaw?`,
        options(x2, [m2 * x1 / m1, x1, (m1 + m2) * x1 / m2, x1 * m1 / (m1 + m2)], unit('m')),
        `Balanced torques: m₁gx₁ = m₂gx₂, so x₂ = (${m1} × ${x1}) ÷ ${m2} = ${num(x2)} m.`);
    }),
    ...each([[1, 2, 4], [1, 1.5], [0.2, 0.3]], (M, L, d, key) => {
      const I = M * L * L / 12 + M * d * d;
      return calc(n, 'calc-parallel-axis', key, `A uniform rod of mass ${M} kg and length ${L} m rotates about a perpendicular axis ${d} m from its center. What is its rotational inertia about this axis?`,
        options(I, [M * L * L / 12, M * d * d, M * L * L / 3, M * L * L / 12 - M * d * d], unit('kg·m²')),
        `Parallel-axis theorem: I = I_cm + Md² = ${M}(${L})²/12 + ${M}(${d})² = ${num(I)} kg·m².`);
    }),
    ...each([[0.5, 1, 2], [2, 4], [0.1, 0.2]], (m, M, R, key) => {
      const a = m * G / (m + M / 2);
      return calc(n, 'calc-pulley-disk', key, `A ${m} kg block hangs from a light string wrapped around a ${M} kg solid-disk pulley of radius ${R} m (I = ½MR²) that turns without friction. What is the block’s acceleration?${useG}`,
        options(a, [G, m * G / (m + M), m * G / M, m * G / (m + 2 * M)], unit('m/s²')),
        `mg − T = ma and TR = (½MR²)(a/R), so T = ½Ma. Then a = mg/(m + M/2) = ${num(m * G)} ÷ ${num(m + M / 2)} = ${num(a)} m/s². The radius cancels.`);
    }),
    ...[30, 33, 45, 60, 78, 90, 120, 300, 600, 1200, 1500, 3000].map(rpm => {
      const omega = rpm * 2 * Math.PI / 60;
      return calc(n, 'calc-rpm', String(rpm), `A motor spins at ${given(rpm)} revolutions per minute. What is its angular speed in radians per second?`,
        options(omega, [rpm / 60, rpm * 2 * Math.PI, rpm * Math.PI / 60, rpm / (2 * Math.PI)], unit('rad/s')),
        `ω = ${given(rpm)} rev/min × 2π rad/rev ÷ 60 s/min = ${num(omega)} rad/s.`);
    })
  ],

  // Unit 6: Energy and Momentum of Rotating Systems
  6: n => [
    ...each([[0.02, 0.5, 2.5], [4, 10, 25, 60]], (I, omega, key) => {
      const K = I * omega * omega / 2;
      return calc(n, 'calc-rotational-ke', key, `A flywheel with rotational inertia ${I} kg·m² spins at ${omega} rad/s. What is its rotational kinetic energy?`,
        options(K, [I * omega * omega, I * omega / 2, I * omega, I * I * omega * omega / 2], unit('J')),
        `K = ½Iω² = ½ × ${I} × ${omega}² = ${num(K)} J.`);
    }),
    ...each([[0.01, 0.3, 1.8], [6, 20, 45, 100]], (I, omega, key) => {
      const L = I * omega;
      return calc(n, 'calc-angular-momentum', key, `What is the angular momentum of a wheel with rotational inertia ${I} kg·m² spinning at ${omega} rad/s?`,
        options(L, [I * omega * omega / 2, I / omega, I * omega * omega, omega / I], unit('kg·m²/s')),
        `L = Iω = ${I} × ${omega} = ${num(L)} kg·m²/s.`);
    }),
    ...each([[3.5, 4.5, 6], [2, 3.5], [0.4, 0.5]], (I1, omega1, ratio, key) => {
      const I2 = Number((I1 * ratio).toFixed(2));
      const omega2 = I1 * omega1 / I2;
      return calc(n, 'calc-skater', key, `A spinning skater has rotational inertia ${I1} kg·m² and turns at ${omega1} rad/s. She pulls in her arms, reducing her rotational inertia to ${I2} kg·m². What is her new angular speed?`,
        options(omega2, [omega1 * I2 / I1, omega1, omega1 * (I1 / I2) ** 2, Math.sqrt(I1 / I2) * omega1], unit('rad/s')),
        `Angular momentum is conserved: I₁ω₁ = I₂ω₂, so ω₂ = ${I1} × ${omega1} ÷ ${I2} = ${num(omega2)} rad/s.`);
    }),
    ...each([shapes, [0.5, 1.2, 3]], ([name, label, c], h, key) => {
      const v = Math.sqrt(2 * G * h / (1 + c));
      return calc(n, 'calc-rolling-speed', name + '_' + h, `A ${label} rolls without slipping from rest down an incline, dropping ${h} m in height. What is its speed at the bottom?${useG}`,
        options(v, [Math.sqrt(2 * G * h), Math.sqrt(G * h), Math.sqrt(2 * G * h * c), Math.sqrt(2 * G * h / c)], unit('m/s')),
        `mgh = ½mv² + ½Iω² = ½mv²(1 + ${num(c, 2)}), so v = √(2gh/(1 + ${num(c, 2)})) = ${num(v)} m/s.`);
    }),
    ...each([[4, 12, 30], [2, 5, 10, 25]], (tau, revolutions, key) => {
      const W = tau * 2 * Math.PI * revolutions;
      return calc(n, 'calc-rotational-work', key, `A constant torque of ${tau} N·m turns a wheel through ${revolutions} revolutions. How much work does the torque do?`,
        options(W, [tau * revolutions, tau * revolutions / (2 * Math.PI), tau * Math.PI * revolutions, tau / revolutions], unit('J')),
        `W = τΔθ, with Δθ = ${revolutions} × 2π = ${num(2 * Math.PI * revolutions)} rad: W = ${num(W)} J.`);
    }),
    ...each([[50, 120, 300], [20, 60, 150, 300]], (tau, omega, key) => {
      const P = tau * omega;
      return calc(n, 'calc-rotational-power', key, `An engine delivers a torque of ${tau} N·m to a shaft spinning at ${omega} rad/s. What power does it deliver?`,
        options(P, [tau / omega, tau * omega / 2, tau * omega * omega, omega / tau], unit('W')),
        `P = τω = ${tau} × ${omega} = ${num(P)} W.`);
    }),
    ...each([[0.5, 2, 8], [0.5, 2], [0.2, 0.6]], (tau, dt, I, key) => {
      const dw = tau * dt / I;
      return calc(n, 'calc-angular-impulse', key, `A net torque of ${tau} N·m acts for ${dt} s on a wheel with rotational inertia ${I} kg·m², initially at rest. What is its angular speed afterward?`,
        options(dw, [tau * dt, tau / I, tau * dt * I, tau * dt / (2 * I)], unit('rad/s')),
        `Angular impulse τΔt = ${num(tau * dt)} kg·m²/s = IΔω, so Δω = ${num(tau * dt)} ÷ ${I} = ${num(dw)} rad/s.`);
    }),
    ...orbits.map(([body, M, r, label], index) => {
      const v = Math.sqrt(GRAV * M / r);
      return calc(n, 'calc-orbital-speed', String(index), `What is the orbital speed of ${label} in a circular orbit of radius ${num(r)} m? The mass of ${body} is ${num(M)} kg. (G = 6.67 × 10⁻¹¹ N·m²/kg²)`,
        options(v, [Math.sqrt(2 * GRAV * M / r), GRAV * M / r, Math.sqrt(GRAV * M) / r, v / 2], unit('m/s')),
        `Gravity provides the centripetal force: GMm/r² = mv²/r, so v = √(GM/r) = ${num(v)} m/s.`);
    }),
    ...orbits.map(([body, M, r, label], index) => {
      const T = 2 * Math.PI * Math.sqrt(r ** 3 / (GRAV * M));
      return calc(n, 'calc-orbital-period', String(index), `What is the orbital period of ${label} in a circular orbit of radius ${num(r)} m? The mass of ${body} is ${num(M)} kg. (G = 6.67 × 10⁻¹¹ N·m²/kg²)`,
        options(T, [Math.sqrt(r ** 3 / (GRAV * M)), 2 * Math.PI * r / Math.sqrt(2 * GRAV * M / r), T / (2 * Math.PI) ** 2, 2 * T], unit('s')),
        `T = 2πr/v with v = √(GM/r), so T = 2π√(r³/GM) = ${num(T)} s.`);
    }),
    ...each([[80, 150, 300], [1.5, 3], [25, 40]], (I0, omega0, m, key) => {
      const R = 2;
      const omega = I0 * omega0 / (I0 + m * R * R);
      return calc(n, 'calc-platform', key, `A merry-go-round with rotational inertia ${I0} kg·m² spins freely at ${omega0} rad/s. A ${m} kg child jumps straight down onto its edge, 2.0 m from the axis. What is the new angular speed?`,
        options(omega, [omega0, I0 * omega0 / (m * R * R), (I0 + m * R * R) * omega0 / I0, I0 * omega0 / (I0 + m * R)], unit('rad/s')),
        `Angular momentum is conserved: ${I0} × ${omega0} = (${I0} + ${m} × 2.0²)ω, so ω = ${num(omega)} rad/s.`);
    })
  ],

  // Unit 7: Oscillations
  7: n => [
    ...each([[0.2, 0.5, 1.5], [20, 80, 250, 600]], (m, k, key) => {
      const T = 2 * Math.PI * Math.sqrt(m / k);
      return calc(n, 'calc-spring-period', key, `A ${m} kg block oscillates on a spring with spring constant ${k} N/m. What is the period of the oscillation?`,
        options(T, [2 * Math.PI * Math.sqrt(k / m), Math.sqrt(m / k), 2 * Math.PI * m / k, Math.PI * Math.sqrt(m / k)], unit('s')),
        `T = 2π√(m/k) = 2π√(${m} ÷ ${k}) = ${num(T)} s.`);
    }),
    ...each([[0.25, 0.5, 1, 1.6, 2.5, 4], [['on Earth', G], ['on the Moon', 1.6]]], (L, [place, g], key) => {
      const T = 2 * Math.PI * Math.sqrt(L / g);
      return calc(n, 'calc-pendulum-period', L + '_' + g, `What is the period of a simple pendulum of length ${L} m swinging through small angles ${place} (g = ${g} m/s²)?`,
        options(T, [2 * Math.PI * Math.sqrt(g / L), Math.sqrt(L / g), 2 * Math.PI * L / g, Math.PI * Math.sqrt(L / g)], unit('s')),
        `T = 2π√(L/g) = 2π√(${L} ÷ ${g}) = ${num(T)} s.`);
    }),
    ...each([[10, 20, 30], [5, 12, 40, 90]], (count, t, key) => {
      const f = count / t;
      return calc(n, 'calc-frequency', key, `A vibrating object completes ${count} full oscillations in ${t} s. What is its frequency?`,
        options(f, [t / count, 2 * Math.PI * count / t, count * t, count / (2 * Math.PI * t)], unit('Hz')),
        `f = number of cycles ÷ time = ${count} ÷ ${t} = ${num(f)} Hz. (The period is ${num(t / count)} s.)`);
    }),
    ...each([[0.02, 0.05, 0.12], [40, 200], [0.5, 2]], (A, k, m, key) => {
      const v = A * Math.sqrt(k / m);
      return calc(n, 'calc-max-speed', key, `A ${m} kg block on a spring (k = ${k} N/m) oscillates with amplitude ${A} m. What is its maximum speed?`,
        options(v, [A * k / m, Math.sqrt(k / m), A * A * Math.sqrt(k / m), A * Math.sqrt(m / k)], unit('m/s')),
        `½kA² = ½mv_max², so v_max = A√(k/m) = ${A} × √(${k} ÷ ${m}) = ${num(v)} m/s.`);
    }),
    ...each([[0.02, 0.05, 0.12], [40, 200], [0.5, 2]], (A, k, m, key) => {
      const a = A * k / m;
      return calc(n, 'calc-max-acceleration', key, `A ${m} kg block on a spring (k = ${k} N/m) oscillates with amplitude ${A} m. What is the magnitude of its maximum acceleration?`,
        options(a, [A * Math.sqrt(k / m), k / m, k * A, A * m / k], unit('m/s²')),
        `The greatest force is kA at maximum displacement, so a_max = kA/m = ${k} × ${A} ÷ ${m} = ${num(a)} m/s².`);
    }),
    ...each([[50, 150, 400], [0.03, 0.06, 0.1, 0.15]], (k, A, key) => {
      const E = k * A * A / 2;
      return calc(n, 'calc-oscillator-energy', key, `A block on a spring with k = ${k} N/m oscillates with amplitude ${A} m. What is the total mechanical energy of the oscillator?`,
        options(E, [k * A * A, k * A / 2, k * A, k * A * A / 4], unit('J')),
        `E = ½kA² = ½ × ${k} × ${A}² = ${num(E)} J.`);
    }),
    ...each([[[100, 0.5], [400, 1], [60, 1.5]], [0.1, 0.2], [0.5, 0.8]], ([k, m], A, share, key) => {
      const x = Number((share * A).toFixed(2));
      const w = Math.sqrt(k / m);
      const v = w * Math.sqrt(A * A - x * x);
      return calc(n, 'calc-speed-at-position', key, `A ${m} kg block on a spring (k = ${k} N/m) oscillates with amplitude ${A} m. What is its speed when it is ${x} m from equilibrium?`,
        options(v, [w * A, w * x, w * (A - x), w * Math.sqrt(A * A + x * x)], unit('m/s')),
        `½kA² = ½kx² + ½mv², so v = √((k/m)(A² − x²)) = ${num(v)} m/s.`);
    }),
    ...each([[['mass', 'The mass of a block on a spring', 0.5], ['spring', 'The spring constant of a mass-spring oscillator', -0.5], ['amplitude', 'The amplitude of a mass-spring oscillator', 0], ['length', 'The length of a simple pendulum', 0.5], ['gravity', 'The gravitational field strength acting on a simple pendulum', -0.5], ['bob', 'The mass of a simple pendulum’s bob', 0]], [4, 9]], ([name, text, power], times, key) => {
      const ratio = times ** power;
      return calc(n, 'calc-period-ratio', name + '_' + times, `${text} is multiplied by ${times}. If the original period is T, what is the new period?`,
        options(ratio, [times, 1 / times, Math.sqrt(times), 1 / Math.sqrt(times), 1, times * times], value => factor(value, 'T')),
        power === 0
          ? `The period does not depend on this quantity, so it stays T.`
          : `The period is proportional to the square ${power > 0 ? 'root' : 'root of the inverse'} of this quantity, so it becomes ${factor(ratio, 'T')}.`);
    }),
    ...each([[0.25, 0.8, 2], [0.5, 1.2, 2, 3.1]], (m, T, key) => {
      const k = 4 * Math.PI * Math.PI * m / (T * T);
      return calc(n, 'calc-spring-constant', key, `A ${m} kg mass on a spring oscillates with a period of ${T} s. What is the spring constant?`,
        options(k, [4 * Math.PI * Math.PI * m / T, 2 * Math.PI * m / (T * T), m / (T * T), 4 * Math.PI * Math.PI * T * T / m], unit('N/m')),
        `T = 2π√(m/k), so k = 4π²m/T² = 4π² × ${m} ÷ ${T}² = ${num(k)} N/m.`);
    }),
    ...each([[[100, 100], [150, 300], [200, 600]], ['series', 'parallel'], [0.5, 2]], ([k1, k2], arrangement, m, key) => {
      const series = k1 * k2 / (k1 + k2);
      const parallel = k1 + k2;
      const keff = arrangement === 'series' ? series : parallel;
      const other = arrangement === 'series' ? parallel : series;
      const period = k => 2 * Math.PI * Math.sqrt(m / k);
      return calc(n, 'calc-spring-combination', key, `Springs with constants ${k1} N/m and ${k2} N/m are connected in ${arrangement} and support a ${m} kg block that oscillates. What is the period?`,
        options(period(keff), [period(other), period(k1), period(k2), 2 * Math.PI * Math.sqrt(m / (k1 * k2))], unit('s')),
        `In ${arrangement}, k_eff = ${arrangement === 'series' ? 'k₁k₂/(k₁ + k₂)' : 'k₁ + k₂'} = ${num(keff)} N/m, so T = 2π√(${m} ÷ ${num(keff)}) = ${num(period(keff))} s.`);
    }),
    ...each([[2, 4, 8], [0.8, 1.6, 2.4, 4]], (A, T, key) => {
      const { x, y } = wave(A, T);
      const plot = { type: 'line', xLabel: 'Time (s)', yLabel: 'Displacement (cm)', x, series: [{ name: 'Displacement', values: y }] };
      return calc(n, 'graph-oscillation', key, 'What is the frequency of the oscillation?',
        options(1 / T, [T, 2 / T, 1 / (2 * T), A / T], unit('Hz')),
        `One full cycle takes T = ${T} s, so f = 1/T = ${num(1 / T)} Hz.`,
        { plot, context: 'The graph shows the displacement of an object in simple harmonic motion.' });
    })
  ],

  // Unit 8: Fluids
  8: n => [
    ...each([[0.5, 1.2, 3], [2e-4, 5e-4, 1.5e-3, 4e-3]], (m, V, key) => {
      const rho = m / V;
      return calc(n, 'calc-density', key, `A solid object has a mass of ${m} kg and a volume of ${given(V)} m³. What is its density?`,
        options(rho, [V / m, m * V, rho / 1000, rho * 1000], unit('kg/m³')),
        `ρ = m/V = ${m} ÷ ${given(V)} = ${num(rho)} kg/m³.`);
    }),
    ...each([[2, 5, 10, 25], liquids], (h, [name, rho], key) => {
      const P = P0 + rho * G * h;
      return calc(n, 'calc-absolute-pressure', h + '_' + rho, `What is the absolute pressure ${h} m below the surface of ${name} (density ${given(rho)} kg/m³)? Atmospheric pressure is 1.01 × 10⁵ Pa.${useG}`,
        options(P, [rho * G * h, P0 + rho * h, P0 - rho * G * h, P0 + 2 * rho * G * h], unit('Pa')),
        `P = P₀ + ρgh = 1.01 × 10⁵ + (${given(rho)})(9.8)(${h}) = ${num(P)} Pa.`);
    }),
    ...each([[2e-4, 8e-4, 2.5e-3, 1.2e-2], [['fresh water', 1000, 'aluminum', 2700], ['seawater', 1025, 'iron', 7870], ['oil', 850, 'copper', 8960]]], (V, [fluid, rhoF, metal, rhoO], key) => {
      const F = rhoF * V * G;
      return calc(n, 'calc-buoyant-force', V + '_' + rhoF, `${/^[aeiou]/.test(metal) ? 'An' : 'A'} ${metal} block (density ${given(rhoO)} kg/m³) with volume ${given(V)} m³ is fully submerged in ${fluid} (density ${given(rhoF)} kg/m³). What is the buoyant force on it?${useG}`,
        options(F, [rhoO * V * G, rhoF * V, (rhoO - rhoF) * V * G, F / 2], unit('N')),
        `F_B = ρ_fluid V g = ${given(rhoF)} × ${given(V)} × 9.8 = ${num(F)} N. The block’s own density does not matter.`);
    }),
    ...each([floaters, [['fresh water', 1000], ['seawater', 1025]]], ([solid, rhoO], [fluid, rhoF], key) => {
      const percent = rhoO / rhoF * 100;
      return calc(n, 'calc-fraction-submerged', solid + '_' + rhoF, `A block of ${solid} (density ${rhoO} kg/m³) floats in ${fluid} (density ${given(rhoF)} kg/m³). What percentage of the block’s volume is underwater?`,
        options(percent, [100 - percent, percent / 2, rhoO / (rhoO + rhoF) * 100, rhoF / 10], value => num(value) + '%'),
        `For a floating object, the fraction submerged = ρ_object/ρ_fluid = ${rhoO} ÷ ${given(rhoF)} = ${num(percent)}%.`);
    }),
    ...each([[0.5, 2, 5], sinkers], (m, [metal, rhoO], key) => {
      const V = m / rhoO;
      const apparent = m * G - RHO_WATER * V * G;
      return calc(n, 'calc-apparent-weight', m + '_' + metal, `A ${m} kg ${metal} weight (density ${given(rhoO)} kg/m³) hangs from a spring scale while fully submerged in water (1,000 kg/m³). What does the scale read?${useG}`,
        options(apparent, [m * G, RHO_WATER * V * G, m * G + RHO_WATER * V * G, m * G * RHO_WATER / rhoO], unit('N')),
        `V = m/ρ = ${num(V)} m³. Buoyant force = ρ_w V g = ${num(RHO_WATER * V * G)} N. Scale reading = mg − F_B = ${num(m * G)} − ${num(RHO_WATER * V * G)} = ${num(apparent)} N.`);
    }),
    ...each([[1.5, 3, 4], [[4, 2], [6, 3], [5, 2], [3, 1.5]]], (v1, [d1, d2], key) => {
      const v2 = v1 * (d1 / d2) ** 2;
      return calc(n, 'calc-continuity', key, `Water flows at ${v1} m/s through a pipe of diameter ${d1} cm, which narrows to a diameter of ${d2} cm. What is the speed of the water in the narrow section?`,
        options(v2, [v1 * d1 / d2, v1 * (d2 / d1) ** 2, v1 * (d1 / d2) ** 4, v1], unit('m/s')),
        `A₁v₁ = A₂v₂ and A ∝ d², so v₂ = v₁(d₁/d₂)² = ${v1} × (${d1}/${d2})² = ${num(v2)} m/s.`);
    }),
    ...each([[1, 2, 3], [4, 6, 8, 10]], (v1, v2, key) => {
      const dP = 0.5 * RHO_WATER * (v2 * v2 - v1 * v1);
      return calc(n, 'calc-bernoulli', key, `Water (1,000 kg/m³) flows through a horizontal pipe, speeding up from ${v1} m/s in the wide section to ${v2} m/s in the narrow section. How much lower is the pressure in the narrow section?`,
        options(dP, [0.5 * RHO_WATER * (v2 - v1) ** 2, RHO_WATER * (v2 * v2 - v1 * v1), 0.5 * RHO_WATER * v2 * v2, RHO_WATER * (v2 - v1)], unit('Pa')),
        `For a horizontal pipe, P₁ − P₂ = ½ρ(v₂² − v₁²) = ½(1,000)(${v2}² − ${v1}²) = ${num(dP)} Pa.`);
    }),
    ...[0.2, 0.5, 1, 1.8, 2.5, 3.2, 4.5, 5, 6, 8, 10, 12].map(h => {
      const v = Math.sqrt(2 * G * h);
      return calc(n, 'calc-torricelli', String(h), `A small hole is punched in the side of an open water tank, ${h} m below the water’s surface. At what speed does water leave the hole?${useG}`,
        options(v, [Math.sqrt(G * h), 2 * G * h, Math.sqrt(2 * h / G), G * h], unit('m/s')),
        `Bernoulli’s equation (Torricelli’s result): v = √(2gh) = √(2 × 9.8 × ${h}) = ${num(v)} m/s.`);
    }),
    ...each([[50, 120, 300], [[2, 10], [2, 20], [4, 20], [4, 30]]], (F1, [d1, d2], key) => {
      const F2 = F1 * (d2 / d1) ** 2;
      return calc(n, 'calc-hydraulic', key, `In a hydraulic lift, a ${F1} N force pushes on a small piston of diameter ${d1} cm. The large piston has a diameter of ${d2} cm. What force does the large piston exert?`,
        options(F2, [F1 * d2 / d1, F1 * (d1 / d2) ** 2, F1, F1 * (d2 / d1) ** 3], unit('N')),
        `Pressure is equal on both pistons: F₂ = F₁(A₂/A₁) = F₁(d₂/d₁)² = ${F1} × (${d2}/${d1})² = ${num(F2)} N.`);
    }),
    ...each([[1, 2, 5], [0.5, 1.5, 3, 6]], (dcm, v, key) => {
      const r = dcm / 200;
      const Q = Math.PI * r * r * v;
      return calc(n, 'calc-flow-rate', key, `Water flows at ${v} m/s through a pipe with an inside diameter of ${dcm} cm. What is the volume flow rate?`,
        options(Q, [Math.PI * (dcm / 100) ** 2 * v, 2 * Math.PI * r * v, (dcm / 100) * v, Math.PI * r * r / v], unit('m³/s')),
        `Q = Av = π(${num(r, 2)} m)² × ${v} m/s = ${num(Q)} m³/s.`);
    })
  ]
};

function writtenQuestion(n, entry, index) {
  const id = 'phys-' + n + '-written-' + index;
  if (!Array.isArray(entry)) return { ...entry, id, answer: 0, family: entry.family };
  const [family, prompt, correct, a, b, c, explanation] = entry;
  return { id, family, prompt, choices: [correct, a, b, c], answer: 0, explanation };
}

const cache = new Map();

export function physicsQuestions(n) {
  if (!cache.has(n)) {
    const items = (written[n - 1] ?? []).map((entry, index) => writtenQuestion(n, entry, index));
    const generated = (generators[n]?.(n) ?? []).filter(Boolean);
    // The practice page picks one question per type in turn, and types with more questions tend to come up first.
    // Grouping into three reasoning types and three calculation types gives each set a mix close to the AP exam's.
    let reasoning = 0;
    for (const item of items) if (!item.plot) item.family = 'reasoning-' + (reasoning++ % 3);
    const templates = [...new Set(generated.filter(item => !item.plot).map(item => item.family))];
    for (const item of generated) if (!item.plot) item.family = 'calc-' + (templates.indexOf(item.family) % 3);
    const unique = new Map();
    for (const item of [...items, ...generated]) if (!unique.has(item.id)) unique.set(item.id, item);
    cache.set(n, [...unique.values()]);
  }
  return cache.get(n);
}
