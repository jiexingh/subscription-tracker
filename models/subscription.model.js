import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Subscription name is required"],
        trim: true,
        minLength: [2, "Subscription name must be at least 2 characters long"],
        maxLenngth: [100, "Subscription name must be at most 100 characters long"],
    },
    price: {
        type: Number,
        required: [true, "Subscription price is required"],
        min: [0, "Subscription price must be a positive number"],
    },
    currency: {
        type: String,
        enum: ["USD", "EUR", "GBP"],
        default: "USD",
    },
    frequency: {
        type: String,
        enum: ["daily","weekly","monthly", "yearly"]
    },
    category:{
        type: String,
        enum: ["sport","news","entertainment", "education","health","other"],
        required: true
    },
    paymentMethod:{
        type: String,
        required: true,
        trim: true,
    },
    status:{
        type: String,
        enum: ["active","cancelled","expired"],
        default: "active"
    },
    statDate:{
        type: Date,
        required: true,
        validate: {
            validator: (value) => value <= new Date(),
            message: "Start date must be in the past or today",
        }
    },
    renewalDate:{
        type: Date,
        validate: {
            validator: function(value) {
                return value > this.startDate
            },
            message: "Renewal date must be after start date",
        },
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
    }
},{ timestamps: true });

// Auto calculate renewal date if missing
subscriptionSchema.pre("save", function(next){
    if(!this.renewalDate){
        const renewalPeriod = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365,
        };

        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriod[this.frequency]);
    }

    // Auto-update the status if renewal date has passed
    if(this.renewalDate < new Date()){
        this.status = "expired";
    }

    next();
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;