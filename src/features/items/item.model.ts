import { z } from 'zod';

export const ItemSchema = z.object({
  // Accept bigint (from DB), numeric strings, or numbers and coerce to number.
  // If the bigint is larger than Number.MAX_SAFE_INTEGER validation will fail to avoid silent precision loss.
  id: z.preprocess((val) => {
    // If already a number, return as-is
    if (typeof val === 'number') return val;
    // If bigint (e.g., returned by some drivers), convert to number if safe
    if (typeof val === 'bigint') {
      const asNumber = Number(val);
      if (!Number.isSafeInteger(asNumber)) return val; // return original to cause validation failure
      return asNumber;
    }
    // If string, try to parse integer-like strings
    if (typeof val === 'string') {
      if (/^-?\d+$/.test(val)) {
        const asBigInt = BigInt(val);
        const asNumber = Number(asBigInt);
        if (!Number.isSafeInteger(asNumber)) return val;
        return asNumber;
      }
      return val;
    }
    return val;
  }, z.number().int()),
  created_at: z.date(),
  name: z.string().min(1),
  description: z.string().min(1),
});

export const ItemsSchema = z.array(ItemSchema);

export type Item = z.infer<typeof ItemSchema>;
