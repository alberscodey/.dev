/* Each muscle group will have its own array of exercises.

Choosing a muscle group to excercise will select a *mostly* randomized workout comprised of exercises that target that muscle group.

The generator will also take into account the various target areas for each muscle group. For example, a chest workout should consist of an exercise that targets the uppper chest, one for the mid chest, and one for lower chest.

Eventually, I will build the functionality for a user to choose which target areas they want to focus on. So in our chest example, a user might want to work only the lower chest. They'll eventually be able to do that. */

// Now for the chest.

function generateChestWorkout() {
   
   const chestWarmUps = ['Pushups', 'Spiderman Pushups', 'Prowler Pushups', 'Wide Pushups', 'Pendulum Pushups', 'Diamond Cutter Pushups'];

   const upperChestExercises = ['Incline Bench Press', 'Incline DB Press', 'Incline DB Pullovers', 'Incline DB Flys', 'Cable Crossovers (from lowered pulleys)', 'Decline Pushups (feet elevated)', 'Reverse Grip Bench Press', 'Incline Chest Press Machine'];

   const midChestExercises = ['Bench Press', 'DB Flys', 'DB Press', 'DB Pullovers', 'Cable Crosovers (from mid pulleys)', 'Plyo Pushups', 'Wide Grip Bench Press'];

   const lowerChestExercises = ['Decline Bench Press', 'Decline DB Press', 'Decline DB Pullovers', 'Decline DB Flys', 'Modified Dips', 'Cable Crossovers (from raised pulleys)'];

   const chestWorkout = [
      chestWarmUps[Math.floor(Math.random() * chestWarmUps.length)], 
      upperChestExercises[Math.floor(Math.random() * upperChestExercises.length)],
      midChestExercises[Math.floor(Math.random() * midChestExercises.length)],
      lowerChestExercises[Math.floor(Math.random() * lowerChestExercises.length)]
   ];
   
   document.getElementById("chest").classList.toggle("selected");
   document.getElementById("chest-display").classList.toggle("hidden");
   document.getElementById("chest-warmup").innerHTML = chestWorkout[0];
   document.getElementById("chest-upper").innerHTML = chestWorkout[1];
   document.getElementById("chest-mid").innerHTML = chestWorkout[2];
   document.getElementById("chest-lower").innerHTML = chestWorkout[3];
   
};

// Now let's put together some back exercises. These will be grouped by Lats (primary and secondary), Middle Back, and Lower Back.

function generateBackWorkout() {
   
   const backWarmUps = ['Reverse BW Rows', 'Light-weight Cable Pulldowns', 'BW Strap Rows', 'Bent-over Stretchband Rows'];

   const primaryLatExercises = ['Pullups', 'Wide Grip Cable Pulldowns', 'Narrow Grip Cable Pulldowns', 'Rocking Pulldowns', 'Chinups', 'Underhand Pulldowns'];

   const secondaryLatExercises = ['Straight Arm Pushdowns', 'Medicine Ball Slams'];

   const middleBackExercises = ['DB Row', 'T-Bar Row', 'Wide Grip Barbell Row', 'Underhand Barbell Row', 'Narrow Grip Cable Row', 'Wide Grip Cable Row', 'One-Arm Longbar Row', 'Bent-Over Longbar Row'];

   const lowerBackExercises = ['Back Extensions', 'Seated Back Extensions', 'Supermans'];

   const backWorkout = [
      backWarmUps[Math.floor(Math.random() * backWarmUps.length)],
      primaryLatExercises[Math.floor(Math.random() * primaryLatExercises.length)],
      middleBackExercises[Math.floor(Math.random() * middleBackExercises.length)],
      secondaryLatExercises[Math.floor(Math.random() * secondaryLatExercises.length)],
      lowerBackExercises[Math.floor(Math.random() * lowerBackExercises.length)]
   ];
   
   document.getElementById("back").classList.toggle("selected");
   document.getElementById("back-display").classList.toggle("hidden");
   document.getElementById("back-warmup").innerHTML = backWorkout[0];
   document.getElementById("lat-primary").innerHTML = backWorkout[1];
   document.getElementById("back-mid").innerHTML = backWorkout[2];
   document.getElementById("lat-secondary").innerHTML = backWorkout[3];
   document.getElementById("back-lower").innerHTML = backWorkout[4];
   
};

// Traps. Consists of Upper Traps, Mid Traps, and Lower Traps.

function generateTrapWorkout() {
   
   const trapWarmUps = ['Shoulder Circles - forward and backward', '30s Shrug Holds (little to no weight)']

   const upperTrapExercises = ['Barbell Shrugs', 'DB/Plate Shrugs', 'DB/KB Trap Carries', 'Trap Bar Carries', 'Angled Cable Shrugs', 'Hexbar Shrugs'];

   const midTrapExercises = ['Wrap-Around Rows', 'Wrap-Around Row Holds', 'Bent-Over Shrugs', 'Bent-Over Shrug Holds'];

   const lowerTrapExercises = ['Y Press', 'Prone Press', 'Upper Half Plate Raises', 'Underhand Facepull Raises'];

   const trapWorkout = [
      trapWarmUps[Math.floor(Math.random() * trapWarmUps.length)], 
      upperTrapExercises[Math.floor(Math.random() * upperTrapExercises.length)],
      midTrapExercises[Math.floor(Math.random() * midTrapExercises.length)],
      lowerTrapExercises[Math.floor(Math.random() * lowerTrapExercises.length)]
   ];
   
   document.getElementById("traps").classList.toggle("selected");
   document.getElementById("traps-display").classList.toggle("hidden");
   document.getElementById("traps-warmup").innerHTML = trapWorkout[0];
   document.getElementById("traps-upper").innerHTML = trapWorkout[1];
   document.getElementById("traps-mid").innerHTML = trapWorkout[2];
   document.getElementById("traps-lower").innerHTML = trapWorkout[3];
   
};

// Shoulders. Consists of general strengthening exercises, then targeted exercises for the Anterior Head, Lateral Head, and Posterior Head. The shoulder warmups are mostly rotator cuff exercises.

function generateShoulderWorkout() {
  
   const shoulderWarmUps = ['Cable Cross Body Pulls', 'Lying DB Cross Body Pulls', 'Rubber Band Lawnmower Pull', 'DB Upper Cuff Rotation', 'Cable Upper Cuff Rotation'];

   const shoulderStrengthExercises = ['Standing DB Overhead Press', 'Military Press', 'Handstand Pushups', 'Landmine Shoulder Press', 'Standing Arnold Press', 'Seated DB Overhead Press', 'Seated Arnold Press'];

   const anteriorShoulderExercises = ['Alternating DB Front Raises', 'Barbell Front Raises', 'Plate Figure 8s', 'Plate Sword Draws', 'Plate Front Raises', 'DB Sword Draws', 'Cable Front Raises', 'Cable Sword Draws', 'Incline DB Front Raises', 'Incline Plate Raises'];

   const lateralShoulderExercises = ['Lateral DB Raises', 'Lateral Cable Raises', 'Incline Lateral DB Raises', 'Modified DB Upright Rows', 'Modified Cable Upright Rows', 'Seated Lateral DB Raises'];

   const posteriorShoulderExercises = ['Rear Delt DB Raises', 'X Cable Pulls', 'Seated Rear Delt DB Raises', 'Flat Bench Rear Delt DB Raises', 'Face Pulls', 'High Boy Rows'];

   const shoulderWorkout = [
      shoulderWarmUps[Math.floor(Math.random() * shoulderWarmUps.length)],
      shoulderStrengthExercises[Math.floor(Math.random() * shoulderStrengthExercises.length)],
      anteriorShoulderExercises[Math.floor(Math.random() * anteriorShoulderExercises.length)],
      lateralShoulderExercises[Math.floor(Math.random() * lateralShoulderExercises.length)],
      posteriorShoulderExercises[Math.floor(Math.random() * posteriorShoulderExercises.length)]
   ];
   
   document.getElementById("shoulders").classList.toggle("selected");
   document.getElementById("shoulders-display").classList.toggle("hidden");
   document.getElementById("shoulders-warmup").innerHTML = shoulderWorkout[0];
   document.getElementById("shoulders-strength").innerHTML = shoulderWorkout[1];
   document.getElementById("shoulders-front").innerHTML = shoulderWorkout[2];
   document.getElementById("shoulders-lateral").innerHTML = shoulderWorkout[3];
   document.getElementById("shoulders-rear").innerHTML = shoulderWorkout[4];
   
};

// Biceps. Consists of the Short (Inner) Head, the Long (Outer) Head, and the Brachialis.

function generateBicepWorkout() {
   
   const bicepWarmUps = ['DB Curls (light weight)', 'Barbell Curls (light weight)', 'Bicep Chinups'];

   const innerBicepExercises = ['Wide Grip Barbell Curls', 'Wide Grip Preacher Curls', 'Drag Curls', 'Incline DB Curls', 'Spider Curls', 'BW Face Curls', 'Cable Overhead Curls'];

   const outerBicepExercises = ['Close Grip Barbell Curls', 'Close Grip Preacher Curls', 'DB Concentration Curls', 'Reverse Grip Barbell Curls', 'Reverse Grip Preacher Curls', 'Close Grip Cable Curls', 'Rope Curls', 'Prayer Curls'];

   const brachialisExercises = ['Parallel Standing Hammer Curls', 'Alternating Standing Hammer Curls', 'Seated Incline Hammer Curls', 'Seated Preacher Hammer Curls'];

   const bicepWorkout = [
      bicepWarmUps[Math.floor(Math.random() * bicepWarmUps.length)],
      innerBicepExercises[Math.floor(Math.random() * innerBicepExercises.length)],
      outerBicepExercises[Math.floor(Math.random() * outerBicepExercises.length)],
      brachialisExercises[Math.floor(Math.random() * brachialisExercises.length)]
   ];
   
   document.getElementById("biceps").classList.toggle("selected");
   document.getElementById("biceps-display").classList.toggle("hidden");
   document.getElementById("biceps-warmup").innerHTML = bicepWorkout[0];
   document.getElementById("biceps-inner").innerHTML = bicepWorkout[1];
   document.getElementById("biceps-outer").innerHTML = bicepWorkout[2];
   document.getElementById("brachialis").innerHTML = bicepWorkout[3];
   
}

// Triceps. Consists of the Long Head, the Lateral (Outer) Head, and the Medial (Inner) Head.

function generateTricepWorkout() {
  
   const tricepWarmUps = ['BW Bench Dips', 'Tricep DB Overhead Press (light weight)', 'Tricep Kickbacks', 'BW Tricep Extensions'];

   const longTricepExercises = ['Tricep Dips', 'Close Grip Bench Press', 'DB Close Grip Bench Press (elbows tucked)', 'Skull Crushers', 'Incline DB Triceps Extensions', 'Incline DB Close Grip Bench Press'];

   const lateralTricepExercises = ['Cobra Pushups', 'Cable Overhead Tricep Extensions', 'DB Overhead Triceps Extensions', 'Tricep Pushdowns', 'Tricep Rope Pushdowns'];

   const medialTricepExercises = ['Reverse Grip Tricep Pushdowns', 'Reverse Grip Skullcrushers', 'Reverse Grip Cable Overhead Tricep Extensions'];
   
   const tricepWorkout = [
      tricepWarmUps[Math.floor(Math.random() * tricepWarmUps.length)],
      longTricepExercises[Math.floor(Math.random() * longTricepExercises.length)],
      lateralTricepExercises[Math.floor(Math.random() * lateralTricepExercises.length)],
      medialTricepExercises[Math.floor(Math.random() * medialTricepExercises.length)]
   ];

   document.getElementById("triceps").classList.toggle("selected");
   document.getElementById("triceps-display").classList.toggle("hidden");
   document.getElementById("triceps-warmup").innerHTML = tricepWorkout[0];
   document.getElementById("triceps-long").innerHTML = tricepWorkout[1];
   document.getElementById("triceps-lateral").innerHTML = tricepWorkout[2];
   document.getElementById("triceps-medial").innerHTML = tricepWorkout[3];
   
};

// Forearms. cable wrist curl, bb wrist curl, overhand wring outs, underhand wringouts, radial/ulnar deviation, pronation/supination, clip grip combo

function generateForearmWorkout() {
   
   const gripExercises = ['Clip Grip Combo', 'Dead Arm Hang', 'Farmer Carries', 'Plate Pinch'];
   
   const otherForearmExercises = ['Cable Pronation / Supination', 'Cable Extension / Flexion', 'Barbell Wring Outs', 'Cable Radial / Ulnar Deviation'];
   
   const forearmWorkout = [
      gripExercises[Math.floor(Math.random() * gripExercises.length)],
      otherForearmExercises[Math.floor(Math.random() * otherForearmExercises.length)]
   ];
   
   document.getElementById('forearms').classList.toggle("selected");
   document.getElementById("forearms-display").classList.toggle("hidden");
   document.getElementById("grip").innerHTML = forearmWorkout[0];
   document.getElementById("forearm-definition").innerHTML = forearmWorkout[1];
   
};

// Now for Legs (NEVER SKIP LEG DAY). We got Warumups, the Anterior Chain, and the Posterior Chain

function generateUpperLegWorkout() {
   
   const legWarmUps = ['BW Squats', 'KB Crush Grip Squats', 'Prisoner Squats', 'BW Jump Squats', 'BW Lunges', 'BW Sprinter Lunges', 'BW Reverse Lunges', 'Side Lunges'];

   const primaryAnteriorChainExercises = ['Squats', 'Front Squats', 'Leg Press', 'DB Jumpsquats', 'DB Bulgarian Split Squats'];

   const secondaryAnteriorChainExercises = ['DB Step Ups', 'Box Jumps', 'Explosive Step Ups', 'DB Sprinter Lunges', 'DB Reverse Lunges', 'DB Side Step Ups'];

   const primaryPosteriorChainExercises = ['Deadlifts', 'DB Single Leg Romanian Deadlifts', 'Sumo Deadlifts', 'DB Romanian Deadlifts (two legs)', 'Barbell Romanian Deadlifts'];

   const secondaryPosteriorChainExercises = ['Glute-Ham Bridge', 'Glute-Ham Bridge (legs elevated on a bench or box)', 'Glute-Ham Medicine Ball Bridge Curls', 'DB Crush Grip Side Lunges', 'Glute Kickback Machine'];

   const legWorkout = [
      legWarmUps[Math.floor(Math.random() * legWarmUps.length)],
      primaryAnteriorChainExercises[Math.floor(Math.random() * primaryAnteriorChainExercises.length)],
      primaryPosteriorChainExercises[Math.floor(Math.random() * primaryPosteriorChainExercises.length)],
      secondaryAnteriorChainExercises[Math.floor(Math.random() * secondaryAnteriorChainExercises.length)],
      secondaryPosteriorChainExercises[Math.floor(Math.random() * secondaryPosteriorChainExercises.length)]
   ];
   
   document.getElementById("upper").classList.toggle("selected");
   document.getElementById("legs-display").classList.toggle("hidden");
   document.getElementById("legs-warmup").innerHTML = legWorkout[0];
   document.getElementById("anterior-primary").innerHTML = legWorkout[1];
   document.getElementById("posterior-primary").innerHTML = legWorkout[2];
   document.getElementById("anterior-secondary").innerHTML = legWorkout[3];
   document.getElementById("posterior-secondary").innerHTML = legWorkout[4];
   
};

// Calves (which consist of the Gastrocnemius and the Soleus). Calves don't really need warmed up too much, since every step you take when walking is like a mini single-leg calf raise. We're working our calves all day long. Place a Calf workout at the end of a leg workout and your calves will be rearing and ready to rock, no warmup required. Otherwise take a few sets of Body Weight (BW) Standing Raises to work your calves through their full range of motion before beginning.

function generateCalfWorkout() {
   
   const gastrocExercises = ['Standing Calf Raises - High Rep / Low Weight', 'Standing Calf Raises - Low Rep / High Weight', 'Donkey Raises - Low Rep / High Weight', 'Donkey Raises - High Rep / Low Wieght', 'Farmer Toe Carries'];

   const soleusExercises = ['Seated Calf Raises - High Rep / Low Weight', 'Seated Calf Raises - Low Rep / High Weight'];

   const calfWorkout = [
      gastrocExercises[Math.floor(Math.random() * gastrocExercises.length)],
      soleusExercises[Math.floor(Math.random() * soleusExercises.length)]
   ];
      
   document.getElementById("calves").classList.toggle("selected");
   document.getElementById("calves-display").classList.toggle("hidden");
   document.getElementById("gastroc").innerHTML = calfWorkout[0];
   document.getElementById("soleus").innerHTML = calfWorkout[1];
   
}

function slideLeft() {
   
   const fullBodyWarmUps = ['5 minute jog', '7 minutes on the exercise bike', '250 jump ropes', '5 minute row machine'];
   
   const warmItUp = fullBodyWarmUps[Math.floor(Math.random() * fullBodyWarmUps.length)]
   
   document.getElementById("warmup").innerHTML = warmItUp;
   document.getElementById("generated-workout").classList.toggle("animated");
   
};

function slideRight() {
  
   document.getElementById("generated-workout").classList.remove("animated");
   
};